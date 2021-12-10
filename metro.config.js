const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, "db"],
    sourceExts: ["jsx", "js", "ts", "tsx"],
  },
};
