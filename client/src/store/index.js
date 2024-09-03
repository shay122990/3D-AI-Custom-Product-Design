import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#1E201E",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./sd-logo.png",
  fullDecal: "./sd-logo.png",
});

export default state;
