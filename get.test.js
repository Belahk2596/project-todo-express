import { test, expect } from "bun:test";

function sum (a, b) {
    return a + b;
}

test("add 1 + 2", () => {
    expect(sum(1,2)).toBe(3)
});

