import { test } from "node:test";
import assert from "node:assert/strict";
import { splitEmphasis } from "./emphasis.js";

test("splits **marked** fragments into strong parts", () => {
  assert.deepEqual(splitEmphasis("a **b** c"), [
    { text: "a ", strong: false },
    { text: "b", strong: true },
    { text: " c", strong: false },
  ]);
});

test("returns the whole text when nothing is marked", () => {
  assert.deepEqual(splitEmphasis("sin marcas"), [
    { text: "sin marcas", strong: false },
  ]);
});

test("drops empty fragments at the edges", () => {
  assert.deepEqual(splitEmphasis("**808 tests** automatizados"), [
    { text: "808 tests", strong: true },
    { text: " automatizados", strong: false },
  ]);
});
