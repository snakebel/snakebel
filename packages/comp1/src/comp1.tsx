import { Component, Prop, Element } from "@stencil/core";
import Comp1Style from "./comp1.styles";

@Component({
  tag: "comp-one",
  //styleUrl: "comp1.scss",
  shadow: false
})
export class MyComponent1 {
  @Prop() first: string;
  @Prop() last: string;

  @Element() divEl: HTMLDivElement;
  buttonStyle: any;

  componentWillLoad() {
    this.buttonStyle = new Comp1Style();
    let changeStyle: object = {};
    this.buttonStyle.setup(changeStyle);
    // this.divEl.className = buttonStyle.getClassName(["root"]);
  }
  render() {
    return (
      <div class={this.buttonStyle.getClassName(["main"])}>
        Hello, World! I'm {this.first} {this.last}
        <slot />
      </div>
    );
  }
}
