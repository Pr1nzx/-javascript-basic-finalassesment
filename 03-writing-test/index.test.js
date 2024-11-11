import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum function", () => {
  assert.strictEqual(sum(100, 12), 112, "100 + 12 should equal 112");
  assert.strictEqual(sum(0, 0), 0, "0 + 0 should equal 0");
  assert.strictEqual(sum(1.5, 2.5), 4, "1.5 + 2.5 should equal 4");
  assert.strictEqual(sum(-10, 5), -5, "-10 + 5 should equal -5");
});
