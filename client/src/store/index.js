import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./sd-logo.png",
  fullDecal: "./sd-logo.png",
});

export default state;
