import { Component } from "@stencil/core";

@Component({
  tag: "comp-two",
  styleUrl: "comp2.scss",
  shadow: false
})
export class MyComponent2 {
  render() {
    // test comment
    return <div class="card">comp2</div>;
  }
}
