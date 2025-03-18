import { describe, it, expect } from "vitest";
import { calculateWinner } from "../App";

describe("calculateWinner", () => {
    it("should return the winner when a row is completed", () => {
        expect(
            calculateWinner(["X", "X", "X", null, null, null, null, null, null])
        ).toBe("X");
        expect(
            calculateWinner([null, null, null, "O", "O", "O", null, null, null])
        ).toBe("O");
    });

    it("should return the winner when a column is completed", () => {
        expect(
            calculateWinner(["X", null, null, "X", null, null, "X", null, null])
        ).toBe("X");
        expect(
            calculateWinner([null, "O", null, null, "O", null, null, "O", null])
        ).toBe("O");
    });

    it("should return the winner when a diagonal is completed", () => {
        expect(
            calculateWinner(["X", null, null, null, "X", null, null, null, "X"])
        ).toBe("X");
        expect(
            calculateWinner([null, null, "O", null, "O", null, "O", null, null])
        ).toBe("O");
    });

    it("should return null if there is no winner", () => {
        expect(
            calculateWinner([
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
            ])
        ).toBe(null);
        expect(
            calculateWinner(["X", "O", "X", "X", "O", "O", "O", "X", "X"])
        ).toBe(null);
    });
});
