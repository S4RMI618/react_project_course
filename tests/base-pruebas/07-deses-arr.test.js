import { returnArray } from "../../src/base-pruebas/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
    test('should return a string and a number', () => { 
        const [letters, numbers ] = returnArray();
        console.log(numbers, letters)
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
     })
});
