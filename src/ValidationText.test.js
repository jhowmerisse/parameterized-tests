import { validation } from "./ValidationText";

describe("Test valid text", () => {
    it("Expect to return false with less than 1 caractere", () => {
        const expectedValue = false;
        const result = validation("");
        expect(result).toBe(expectedValue);
    });
    it("Expect to return false with more than 10 caracteres", () => {
        const expectedValue = false;
        const result = validation("qwertyuiopdddd");
        expect(result).toBe(expectedValue);
    });
    it("Expect to return true with value >= 10 caracteres", () => {
        const expectedValue = true;
        const result = validation("qwertyuiop");
        expect(result).toBe(expectedValue);
    });
    it("Expect to return true with value <= 1 caracteres", () => {
        const expectedValue = true;
        const result = validation("q");
        expect(result).toBe(expectedValue);
    });
    it("Expect to return false number", () => {
        const expectedValue = false;
        const result = validation(22);
        expect(result).toBe(expectedValue);
    });
    it("Expect to return false if value equal null", () => {
        const expectedValue = false;
        const result = validation(null);
        expect(result).toBe(expectedValue);
    });
});

describe("Test valid text 2", () => {
    const parameters = [
        {description: 'Expect to return false with less than 1 caractere', input: '', result: false},
        {description: 'Expect to return false with more than 10 caracteres', input: 'qwertyuiopdddd', result: false},
        {description: 'Expect to return true with value >= 10 caracteres', input: 'qwertyuiop', result: true},
        {description: 'Expect to return true with value <= 1 caracteres', input: 'q', result: true},
        {description: 'Expect to return false number', input: 22, result: false},
        {description: 'Expect to return false if value equal null', input: null, result: false}
      ]

    parameters.forEach(parameter => {
        it(parameter.description, () => {
            const result = validation(parameter.input);
            expect(result).toBe(parameter.result);
        });
    });
});

// https://codesandbox.io/s/bold-glade-0gwg3?fontsize=14
