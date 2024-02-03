describe("Pruebas en <DemoComponent/> ", () => {
  test("renders demo component", () => {
    const message = "Hello, World!";
    const message2 = message.trim();

    expect(message).toBe(message2);
  });
});