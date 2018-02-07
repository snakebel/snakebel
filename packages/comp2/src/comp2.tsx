import { Component, Prop } from "@stencil/core";

@Component({
  tag: "comp-two",
  styleUrl: "comp2.scss",
  shadow: true
})
export class MyComponent2 {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div class="card">comp2</div>;
  }
}
