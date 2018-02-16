import { SetupJss } from "@snakebel/util";

class NewsCardStyle {
  jss: any;
  defaultStyle: object = {
    newsCardCheckBox: {
      display: "none"
    },
    newsCard: {
      float: "left",
      padding: "0 1.7rem",
      width: "50%",
      "font-family": "Open Sans, sans-serif",
      "font-weight": 300
    },
    newsCardWrapper: {
      minHeight: "540px",
      position: "relative",
      overflow: "hidden",
      background:
        "url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg) center/cover no-repeat",
      boxShadow:
        "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2)"
    },
    newsCardDate: {
      position: "absolute",
      top: "0",
      left: "0",
      backgroundColor: "#77d7b9",
      color: "#ffffff",
      padding: "0.8em"
    },
    newsCardDay: {
      fontWeight: "700",
      fontSize: "24px",
      textShadow: "2px 3px 2px rgba(0, 0, 0, 0.18)",
      display: "block",
      textAlign: "center"
    },
    newsCardMonth: {
      fontSize: "12px",
      textTransform: "uppercase",
      display: "block",
      textAlign: "center"
    },
    newsCardYear: {
      fontSize: "12px",
      display: "block",
      textAlign: "center"
    },
    newsCardData: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      transform: "translateY(calc(70px + 1em))",
      transition: "transform 0.3s",
      "&:hover": {
        "-webkit-transform": "translateY(0)",
        transform: "translateY(0)"
      }
    },
    newsCardContent: {
      padding: "1em",
      position: "relative",
      backgroundColor: "#fff",
      boxShadow: "0 5px 30px 10px rgba(0, 0, 0, 0.3)",
      "z-index": "1"
    },
    newsCardAuthor: {
      fontSize: "12px"
    },
    newsCardTitle: {
      marginTop: "10px",
      color: "gray",
      textDecoration: "none",
      "font-family": "Open Sans, sans-serif",
      "font-weight": 300
    },
    newsCardAnchor: {
      color: "gray",
      textDecoration: "none",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: "300"
    },
    newsCardText: {
      height: "70px",
      margin: "0"
    },
    newsCardMenuButton: {
      position: "absolute",
      "z-index": "999",
      top: "16px",
      right: "16px",
      width: "25px",
      textAlign: "center",
      cursor: "pointer"
    },
    newsCardMenuButtonSpan: {
      width: "5px",
      height: "5px",
      backgroundColor: "gray",
      color: "gray",
      position: "relative",
      display: "inline-block",
      borderRadius: "50%",
      "&:after": {
        content: '""',
        display: "block",
        width: 5,
        height: 5,
        "background-color": "currentColor",
        position: "absolute",
        "border-radius": "50%",
        right: -10
      },
      "&:before": {
        content: '""',
        display: "block",
        width: 5,
        height: 5,
        "background-color": "currentColor",
        position: "absolute",
        "border-radius": "50%",
        right: 10
      }
    },
    newsCardMenuContent: {
      margin: 0,
      padding: 0,
      "list-style-type": "none",
      textAlign: "center",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      "z-index": "-1",
      "-webkit-transition": "-webkit-transform 0.3s",
      transition: "-webkit-transform 0.3s",
      "-webkit-transform": "translateY(0)",
      transform: "translateY(0)",
      "&:before": {
        content: '""',
        display: "table"
      },
      "&:after": {
        clear: "both",
        content: '""',
        display: "table"
      }
    },
    newsCardMenuContentItem: {
      width: "33.333333%",
      float: "left",
      backgroundColor: "#77d7b9",
      height: "60px",
      position: "relative",
      display: "inline-block",
      fontSize: "24px"
    },
    newsCardMenuContentItemAnchor: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textDecoration: "none",
      color: "#ffffff"
    },
    newsCardMenuContentItemSpan: {
      position: "absolute",
      left: "50%",
      "font-size": "10px",
      "font-weight": 700,
      "font-family": "Open Sans",
      transform: "translate(-50%, 0)",
      top: "-10px"
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
  getRuleName(type: string): any {
    return this.jss.getRule(type);
  }
}
export default NewsCardStyle;
