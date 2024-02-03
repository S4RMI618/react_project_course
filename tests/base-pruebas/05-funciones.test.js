import {
  getUser,
  getUserActive,
} from "../../src/base-pruebas/base-pruebas/05-funciones";

describe("Pruebas en funciones 05", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Sarmi618",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Hugo";

    const user = getUserActive(name);
    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
