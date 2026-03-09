import { describe, it, expect } from "vitest";
import { facts } from "./facts";

describe("facts", () => {
  it("has at least 500 entries", () => {
    expect(facts.length).toBeGreaterThanOrEqual(500);
  });

  it("all entries are non-empty strings", () => {
    facts.forEach((fact, i) => {
      expect(typeof fact).toBe("string");
      expect(fact.trim().length, `fact at index ${i} is empty`).toBeGreaterThan(0);
    });
  });

  it("has no duplicate entries", () => {
    const unique = new Set(facts);
    expect(unique.size).toBe(facts.length);
  });
});
