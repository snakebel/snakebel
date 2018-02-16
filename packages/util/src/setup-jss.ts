import { create } from "jss";
import preset from "jss-preset-default";

class SetupJss {
  jss: any;
  sheet: any;
  constructor() {
    this.jss = create(preset());
  }
  attachStyleSheet(styles) {
    this.sheet = this.jss
      .createStyleSheet(styles, {
        link: true,
        meta: "snakebel-sheet",
        generateClassName: rule => {
          let counter = 0;
          return `snakebel--${rule.key}-${counter++}`;
        }
      })
      .attach();
  }
  getClassName(style: string | Array<string>) {
    if (typeof style === "string") {
      return this.sheet.classes[style];
    }
    let cNames = "";
    style.map(val => (cNames += ` ${this.sheet.classes[val]}`));
    return cNames;
  }
  getRule(style: string) {
    return this.sheet.getRule(style);
  }
}
export default SetupJss;
