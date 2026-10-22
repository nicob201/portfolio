import { test } from "node:test";
import assert from "node:assert/strict";
import { barPosition, todayPosition, formatPeriod } from "./timeline.js";

const range = { from: 2021, to: 2026 };

const assertClose = (actual, expected) =>
  assert.ok(Math.abs(actual - expected) < 0.01, `${actual} is not ≈ ${expected}`);

test("barPosition places a course by its first and last month, inclusive", () => {
  const { left, width } = barPosition("2021-06", "2021-09", range);
  assertClose(left, 6.944);
  assertClose(width, 5.556);
});

test("barPosition spans a multi-year degree", () => {
  const { left, width } = barPosition("2024-08", "2026-09", range);
  assertClose(left, 59.722);
  assertClose(width, 36.111);
});

test("todayPosition marks a date inside the axis", () => {
  const position = todayPosition(range, new Date(2026, 9, 22));
  assert.ok(position > 96.5 && position < 97, `got ${position}`);
});

test("todayPosition hides the marker once the axis is outgrown", () => {
  assert.equal(todayPosition(range, new Date(2027, 1, 1)), null);
});

test("formatPeriod joins months of the same year", () => {
  assert.equal(formatPeriod("2021-06", "2021-09", "es"), "Jun–Sep 2021");
});

test("formatPeriod keeps both years when they differ", () => {
  assert.equal(formatPeriod("2023-12", "2024-03", "es"), "Dic 2023–Mar 2024");
});

test("formatPeriod shows a single month once", () => {
  assert.equal(formatPeriod("2024-01", "2024-01", "en"), "Jan 2024");
});
