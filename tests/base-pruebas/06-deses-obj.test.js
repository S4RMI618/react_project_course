import { usContext } from "../../src/base-pruebas/base-pruebas/06-deses-obj";

describe('Prueba deses 07', () => {
    test('should return an object with the correct properties', () => {
        const result = usContext({ key: '123', name: 'John', age: 30 });
        expect(result).toHaveProperty('keyName', '123');
        expect(result).toHaveProperty('anios', 30);
        expect(result).toHaveProperty('latlng');
        expect(result.latlng).toHaveProperty('lat', 14.1232);
        expect(result.latlng).toHaveProperty('lng', -12.3232);
    });
});
