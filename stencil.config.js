exports.config = {
  srcDir: "packages",
  namespace: "snakebel",
  generateDistribution: true,
  generateWWW: true
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
