import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Dotnet Tutorial",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "Dotnet 教程",
      description: "",
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
