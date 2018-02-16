class FontsAndIcons {
  setLinkNode(fontUrl) {
    var linkNode = document.createElement("link");
    linkNode.type = "text/css";
    linkNode.rel = "stylesheet prefetch";
    linkNode.href = fontUrl;
    document.head.appendChild(linkNode);
  }
  append(fontsAndIcons: Array<string>) {
    fontsAndIcons.forEach(font => {
      this.setLinkNode(font);
    });
  }
}
export default FontsAndIcons;
