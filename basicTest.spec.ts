describe("TypescriptとJestのテスト", () => {
  it("基本的なテスト", () => {
    const a = 10;
    expect(a).toBe(10);
  });

  it("例外のテスト", () => {
    const testFunction = () => {
      throw new Error();
    };
    expect(testFunction).toThrow(Error);
  });

  it("非同期のテスト", async () => {
    const testFunction = async () => {
      return 10;
    };
    await expect(testFunction()).resolves.toEqual(10);
  });

  it("非同期の例外のテスト", async () => {
    const testFunction = async () => {
      throw new Error();
    };
    await expect(testFunction()).rejects.toBeInstanceOf(Error);
  });
});