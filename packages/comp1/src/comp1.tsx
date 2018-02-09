import { Component } from "@stencil/core";

@Component({
  tag: "comp-one",
  styleUrl: "comp1.scss",
  shadow: false
})
export class MyComponent1 {
  render() {
    return <div class="card">comp1</div>;
  }
}
