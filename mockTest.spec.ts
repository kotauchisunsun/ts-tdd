class Driver2 {
  public getData(): string {
    return "DriverClass";
  }
}

class Formatter2 {
  public constructor(private driver: Driver1) {}

  public run(): string {
    const output = this.driver.getData();
    return `Driver is ${output}`;
  }
}

describe("モックを用いたテスト", () => {
  it("モックを用いる場合", () => {
    const driverMockClass = jest.fn<Driver2>(() => ({
      getData: (): string => {
        return "MockClass";
      }
    }));

    const driverMock = new driverMockClass();
    const format = new Formatter2(driverMock);

    expect(format.run()).toBe("Driver is MockClass");
  });
});
