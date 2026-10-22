import { test } from "node:test";
import assert from "node:assert/strict";
import { paginate } from "./paginate.js";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

test("a list that fits in one page is a single page", () => {
  assert.deepEqual(paginate(letters.slice(0, 4), 1, 4), {
    items: ["a", "b", "c", "d"],
    page: 1,
    pageCount: 1,
  });
});

test("the last page holds the leftover items", () => {
  assert.deepEqual(paginate(letters, 3, 4), { items: ["i"], page: 3, pageCount: 3 });
});

test("a page past the end falls back to the last page", () => {
  assert.deepEqual(paginate(letters, 7, 4), { items: ["i"], page: 3, pageCount: 3 });
});

test("an empty list still has one (empty) page", () => {
  assert.deepEqual(paginate([], 1, 4), { items: [], page: 1, pageCount: 1 });
});
