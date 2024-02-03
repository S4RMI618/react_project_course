import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('Prueba en getNombre', () => {
    test('getSaludo debe retornar "Hola Hugo"', () => {
        const name = "Hugo";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
});
