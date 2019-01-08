interface DriverInterface {
  getData(): string;
}

class Driver1 implements DriverInterface {
  public getData(): string {
    return "DriverClass";
  }
}

class Formatter1 {
  public constructor(private driver: DriverInterface) {}

  public run(): string {
    const output = this.driver.getData();
    return `Driver is ${output}`;
  }
}

describe("インターフェースを用いたテスト", () => {
  it("インターフェースを用いる場合", () => {
    class MockDriver implements DriverInterface {
      public getData(): string {
        return "ImplementsClass";
      }
    }
    
    const format = new Formatter1(new MockDriver());

    expect(format.run()).toBe("Driver is ImplementsClass");
  });
});
