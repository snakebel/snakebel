import { SetupJss } from "@snakebel/util";

class Comp1Style {
  jss: any;
  defaultStyle: object = {
    main: {
      backgroundColor: "#ffe0ff",
      height: "200px",
      width: "200px"
    },
    two: {
      backgroundColor: "red"
    }
  };

  setup(style: object) {
    // const mergedStyles = deepmerge.all([this.defaultStyle, style]);
    this.jss = new SetupJss();
    this.jss.attachStyleSheet(this.defaultStyle);
  }
  getClassName(type: Array<string>): string {
    return this.jss.getClassName(type);
  }
}
export default Comp1Style;
