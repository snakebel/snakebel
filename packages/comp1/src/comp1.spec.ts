import { flush, render } from "@stencil/core/testing";
import { MyComponent1 } from "./comp1";

describe("my-component", () => {
  it("should build", () => {
    expect(new MyComponent1()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyComponent1],
        html: "<comp-one></comp-one>"
      });
    });

    it("should work without parameters", () => {
      expect(element.textContent.trim()).toEqual("Hello, World! I'm");
    });

    it("should work with a first name", async () => {
      element.first = "Peter";
      await flush(element);
      expect(element.textContent.trim()).toEqual("Hello, World! I'm Peter");
    });

    it("should work with a last name", async () => {
      element.last = "Parker";
      await flush(element);
      expect(element.textContent.trim()).toEqual("Hello, World! I'm  Parker");
    });

    it("should work with both a first and a last name", async () => {
      element.first = "Peter";
      element.last = "Parker";
      await flush(element);
      expect(element.textContent.trim()).toEqual(
        "Hello, World! I'm Peter Parker"
      );
    });
  });
});
