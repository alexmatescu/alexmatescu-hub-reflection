
CREATE TABLE public.crandit_waitlist (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  source text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, DELETE ON public.crandit_waitlist TO authenticated;
GRANT INSERT ON public.crandit_waitlist TO anon;
GRANT ALL ON public.crandit_waitlist TO service_role;

ALTER TABLE public.crandit_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join CRANDIT waitlist"
  ON public.crandit_waitlist FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view CRANDIT waitlist"
  ON public.crandit_waitlist FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete from CRANDIT waitlist"
  ON public.crandit_waitlist FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
