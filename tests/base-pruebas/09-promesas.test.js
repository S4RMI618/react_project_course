import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe("Testing 09-promesas", () => {
    test("getHeroeyIdAsync should return a hero"), (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
            
            done();
            })
    }
});
