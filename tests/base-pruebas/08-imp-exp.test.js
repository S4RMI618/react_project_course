import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Test in 08-imp-exp", () => {
  test("should getHeroeById return a hero by Id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("should getHeroesByOwner return heroes by owner", () => {
    const DcOwner = "DC";
    const DcHeroes = getHeroesByOwner(DcOwner);
    console.log(DcHeroes);
    expect(DcHeroes.length).toBe(3);
    expect(DcHeroes).toEqual(heroes.filter(heroe => heroe.owner === DcOwner))
  });

  test("should getHeroesByOwner return heroes by owner", () => {
    const MarvelOwner = "Marvel";
    const MarvelHeroes = getHeroesByOwner(MarvelOwner);
    console.log(MarvelHeroes);
    expect(MarvelHeroes.length).toBe(2);
    expect(MarvelHeroes).toEqual(heroes.filter(heroe => heroe.owner === MarvelOwner))
  });
});
 