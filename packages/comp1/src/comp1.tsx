import { Component, Prop } from "@stencil/core";

@Component({
  tag: "comp-one",
  styleUrl: "comp1.scss",
  shadow: true
})
export class MyComponent1 {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return <div class="card">comp1</div>;
  }
}
