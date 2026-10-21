import { describe, expect, it } from "vitest";
import { instanceTypeProblem } from "./mkt.mjs";

describe("instanceTypeProblem", () => {
  it("acceptă PILOT, FULL și lunile din trimestru", () => {
    for (const t of ["PILOT", "FULL", "M10", "M11", "M12"])
      expect(instanceTypeProblem(t, "2026Q4")).toBeNull();
    expect(instanceTypeProblem("M01", "2027Q1")).toBeNull();
    expect(instanceTypeProblem("M06", "2027Q2")).toBeNull();
  });

  it("respinge T0, F<n> și formele greșite", () => {
    for (const t of ["T0", "F1", "F12", "M1", "M00", "M13", "m11", "Full", ""])
      expect(instanceTypeProblem(t, "2026Q4")).toMatch(/invalid/);
  });

  it("respinge o lună din alt trimestru", () => {
    expect(instanceTypeProblem("M09", "2026Q4")).toMatch(
      /nu e o lună din 2026Q4/,
    );
    expect(instanceTypeProblem("M04", "2027Q1")).toMatch(
      /nu e o lună din 2027Q1/,
    );
  });
});
