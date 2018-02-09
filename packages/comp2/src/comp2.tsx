import { Component } from "@stencil/core";

@Component({
  tag: "comp-two",
  styleUrl: "comp2.scss",
  shadow: true
})
export class MyComponent2 {
  render() {
    return <div class="card">comp2</div>;
  }
}
