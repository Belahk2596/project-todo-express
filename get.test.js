import { test, expect } from "bun:test";

function sum (a, b) {
    return a / b;
};

test("add 1 + 2", () => {
    expect(sum(1,2)).toBe(3)
});

test("multiply 1 x 2", () => {
    expect(sum(1,2)).toBe(2)
});

test("divide 2 / 2", () => {
    expect(sum(2,2)).toBe(1)
});

test("subtract 2 - 1", () => {
    expect(sum(2,1)).toBe(1)
});