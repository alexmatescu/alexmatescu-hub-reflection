#!/usr/bin/env bash
# AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility
# Implementare candidată (NEVALIDATĂ ca implementare de referință — AVL-203 §17.4).
#
# Execută capturile deterministe TC-00…TC-07 cu comenzile din AVL-203 §4–§10 și apoi
# rulează analizorul (observații permise, evidence index, checksum-uri).
#
# Utilizare:
#   run_avl203.sh --entity NUME --label T0|F1…Fn|TEST [--out DIR] [--plan FIȘIER]
#                 [--delay SECUNDE] [--chrome-version X.Y.Z.W] URL [URL…]
#
# --plan: fișierul cu planul de măsurare (URL-uri, motivul alegerii, limitele
#         eșantionului — AVL-203 §1); se copiază în manifest. Recomandat.
# Compatibil cu bash 3.2 (macOS).

set -u

SCRIPT_VERSION="0.2.1"
PROTOCOL_VERSION="0.3.0"
SKILL_DIR="$(cd "$(dirname "$0")/.." && pwd)"
UA_MANIFEST="$SKILL_DIR/config/user-agents.v0.1.0.tsv"
CONNECT_TIMEOUT=15
MAX_TIME=45
DELAY=1
CHROME_VERSION="131.0.0.0"
ENTITY=""
LABEL=""
OUT_BASE=""
PLAN=""
URLS=()

die() { echo "eroare: $*" >&2; exit 2; }

while [ $# -gt 0 ]; do
  case "$1" in
    --entity) ENTITY="$2"; shift 2 ;;
    --label) LABEL="$2"; shift 2 ;;
    --out) OUT_BASE="$2"; shift 2 ;;
    --plan) PLAN="$2"; shift 2 ;;
    --delay) DELAY="$2"; shift 2 ;;
    --chrome-version) CHROME_VERSION="$2"; shift 2 ;;
    -h|--help) sed -n '2,16p' "$0"; exit 0 ;;
    --*) die "opțiune necunoscută: $1" ;;
    *) URLS+=("$1"); shift ;;
  esac
done

[ -n "$ENTITY" ] || die "--entity lipsește"
[ -n "$LABEL" ] || die "--label lipsește (T0, F1…Fn sau TEST)"
echo "$LABEL" | grep -Eq '^(T0|F[1-9][0-9]*|TEST)$' || die "--label invalid: $LABEL (AVL-203 §11: T0, F1…Fn; TEST pentru rulări de probă)"
[ ${#URLS[@]} -gt 0 ] || die "niciun URL"
for u in "${URLS[@]}"; do echo "$u" | grep -Eq '^https?://[^/]+' || die "URL invalid: $u"; done
[ -z "$PLAN" ] || [ -f "$PLAN" ] || die "planul nu există: $PLAN"
# AVL203-REQ-001: planul de măsurare e obligatoriu pentru rulările din serie (T0, F1…Fn)
[ -n "$PLAN" ] || [ "$LABEL" = "TEST" ] || die "--plan lipsește: planul de măsurare e obligatoriu pentru $LABEL (AVL203-REQ-001)"
command -v curl >/dev/null || die "curl lipsește"
command -v python3 >/dev/null || die "python3 lipsește"

SLUG=$(echo "$ENTITY" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')
STAMP=$(date -u +'%Y%m%dT%H%M%SZ')
RUN_ID="AVL203-${SLUG}-${LABEL}-${STAMP}"
[ -n "$OUT_BASE" ] || OUT_BASE="evidence/work/avl203"
RUN="$OUT_BASE/run_$RUN_ID"
mkdir -p "$RUN"/{manifest,http,robots,sitemap,agents,integrity} || die "nu pot crea $RUN"

LOG="$RUN/manifest/requests.tsv"
printf 'tc\tfisier\turl_cerut\tuser_agent_cheie\tcurl_exit\tstart_utc\n' > "$LOG"

# ---- TC-00: contextul rulării (AVL-203 §4) -------------------------------
START_UTC=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
{
  echo "start_utc=$START_UTC"
  echo "--- curl --version"; curl --version
  echo "--- uname -a"; uname -a
  if command -v sw_vers >/dev/null; then echo "--- sw_vers"; sw_vers; fi
  echo "--- python3 --version"; python3 --version
  if command -v shasum >/dev/null; then echo "checksum_tool=shasum -a 256"; else echo "checksum_tool=sha256sum"; fi
} > "$RUN/manifest/env.txt" 2>&1
cp "$UA_MANIFEST" "$RUN/manifest/"
[ -z "$PLAN" ] || cp "$PLAN" "$RUN/manifest/plan$(basename "$PLAN" | sed -E 's/^[^.]*//')"
printf '%s\n' "${URLS[@]}" > "$RUN/manifest/urls.txt"
cat > "$RUN/manifest/params.env" <<EOF
run_id=$RUN_ID
entity=$ENTITY
label=$LABEL
protocol=AVL-203
protocol_version=$PROTOCOL_VERSION
script_version=$SCRIPT_VERSION
ua_manifest=$(basename "$UA_MANIFEST")
chrome_version=$CHROME_VERSION
connect_timeout=$CONNECT_TIMEOUT
max_time=$MAX_TIME
redirect_policy=follow (--location)
compression=--compressed la TC-01 si TC-06; fara la TC-03/TC-04 (ca in AVL-203 §6–§7)
delay_seconds=$DELAY
insecure_tls=niciodata
EOF

WRITE_OUT='http_code=%{http_code}\nurl_effective=%{url_effective}\nnum_redirects=%{num_redirects}\ncontent_type=%{content_type}\nsize_download=%{size_download}\nremote_ip=%{remote_ip}\ntime_total=%{time_total}\n'

# fetch TC PREFIX URL UAKEY UASTRING COMPRESSED(0|1)
fetch() {
  local tc="$1" pre="$2" url="$3" uakey="$4" uastr="$5" comp="$6"
  local t0; t0=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
  local args=(--silent --show-error --location --connect-timeout "$CONNECT_TIMEOUT" --max-time "$MAX_TIME"
              --dump-header "$pre.headers" --output "$pre.body" --write-out "$WRITE_OUT")
  [ "$comp" = 1 ] && args+=(--compressed)
  [ -n "$uastr" ] && args+=(--user-agent "$uastr")
  curl "${args[@]}" "$url" > "$pre.metrics" 2> "$pre.err"
  local rc=$?
  echo "curl_exit=$rc" >> "$pre.metrics"
  [ -s "$pre.err" ] || rm -f "$pre.err"
  printf '%s\t%s\t%s\t%s\t%s\t%s\n' "$tc" "${pre#$RUN/}" "$url" "$uakey" "$rc" "$t0" >> "$LOG"
  sleep "$DELAY"
}

origin_of() { echo "$1" | sed -E 's#^(https?://[^/]+).*#\1#'; }
safe() { echo "$1" | sed -E 's#^https?://##; s#[^A-Za-z0-9._-]+#_#g'; }

# ---- TC-01: HTTP GET / URL final (§5) ------------------------------------
i=0
for u in "${URLS[@]}"; do
  i=$((i+1))
  fetch TC-01 "$RUN/http/u$(printf '%02d' $i)" "$u" client "" 1
done

# ---- origini unice -------------------------------------------------------
ORIGINS=$(for u in "${URLS[@]}"; do origin_of "$u"; done | awk '!s[$0]++')

# ---- TC-02: variante de host și protocol (§5) ----------------------------
echo "$ORIGINS" | while read -r o; do
  host=$(echo "$o" | sed -E 's#^https?://##; s#:.*$##')
  bare=${host#www.}
  for scheme in http https; do
    for h in "$bare" "www.$bare"; do
      fetch TC-02 "$RUN/http/variant_${scheme}_${h}" "$scheme://$h/" client "" 1
    done
  done
done

# ---- TC-03: robots.txt (§6) ---------------------------------------------
echo "$ORIGINS" | while read -r o; do
  fetch TC-03 "$RUN/robots/$(safe "$o")" "$o/robots.txt" client "" 0
done

# ---- TC-04: sitemap (§7) — declarate în robots, apoi căi convenționale ----
echo "$ORIGINS" | while read -r o; do
  rb="$RUN/robots/$(safe "$o").body"
  k=0
  if [ -f "$rb" ]; then
    # inspecție inițială (grep din §7), apoi extragerea valorii; limită 10 sitemap-uri declarate
    grep -i '^[[:space:]]*sitemap[[:space:]]*:' "$rb" | sed -E 's/^[[:space:]]*[Ss][Ii][Tt][Ee][Mm][Aa][Pp][[:space:]]*:[[:space:]]*//; s/[[:space:]]+$//' \
      | tr -d '\r' | head -10 > "$RUN/sitemap/$(safe "$o").declared.txt"
    while read -r sm; do
      [ -n "$sm" ] || continue
      k=$((k+1))
      fetch TC-04 "$RUN/sitemap/$(safe "$o")_declared$(printf '%02d' $k)" "$sm" client "" 0
    done < "$RUN/sitemap/$(safe "$o").declared.txt"
  fi
  for p in sitemap.xml sitemap_index.xml; do
    fetch TC-04 "$RUN/sitemap/$(safe "$o")_conventional_${p%.xml}" "$o/$p" client "" 0
  done
done

# ---- TC-06: User-Agent Response Parity (§9) ------------------------------
i=0
for u in "${URLS[@]}"; do
  i=$((i+1))
  grep -v '^#' "$UA_MANIFEST" | while IFS="$(printf '\t')" read -r key token status src uastr; do
    [ -n "$key" ] || continue
    uastr=$(echo "$uastr" | sed "s/{CHROME_VERSION}/$CHROME_VERSION/")
    fetch TC-06 "$RUN/agents/u$(printf '%02d' $i)_$key" "$u" "$key" "$uastr" 1
  done
done

END_UTC=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
echo "end_utc=$END_UTC" >> "$RUN/manifest/env.txt"

# ---- TC-05, observații, evidence index, TC-07 ---------------------------
python3 "$SKILL_DIR/scripts/analyze_avl203.py" "$RUN" || die "analizorul a eșuat (vezi $RUN)"

# TC-07: manifest de integritate (§10): include manifest/, fără auto-includerea fișierului de checksum
( cd "$RUN" && if command -v shasum >/dev/null; then
    find manifest http robots sitemap agents -type f -print0 | sort -z | xargs -0 shasum -a 256 > integrity/sha256sums.txt
    shasum -a 256 -c integrity/sha256sums.txt > integrity/verify.txt 2>&1
  else
    find manifest http robots sitemap agents -type f -print0 | sort -z | xargs -0 sha256sum > integrity/sha256sums.txt
    sha256sum -c integrity/sha256sums.txt > integrity/verify.txt 2>&1
  fi; echo "exit=$?" >> integrity/verify.txt )

echo "$RUN"
