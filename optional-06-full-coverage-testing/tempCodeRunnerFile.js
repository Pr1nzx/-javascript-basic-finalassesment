import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("sum function", () => {
  //cek string
  assert.strictEqual(sum("2", 5), 0, "string input should return 0");
  assert.strictEqual(sum(5, "2"), 0, "string input should return 0");
  assert.strictEqual(sum("2", "5"), 0, "string input should return 0");

  //cek < 0
  assert.strictEqual(sum(-2, 5), 0, "negative number should return 0");
  assert.strictEqual(sum(2, -5), 0, "negative number should return 0");
  assert.strictEqual(sum(-2, -5), 0, "negative number should return 0");

  //tambah tambah
  assert.strictEqual(sum(2, 5), 7, "2 + 5 should equal 7");
});
