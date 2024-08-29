import { useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import { AnimatePresence, motion } from "framer-motion";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTabs } from "../config";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  FilePicker,
  CustomButton,
  ColorPicker,
  Tab,
} from "../components";

const Customizer = () => {
  return <AnimatePresence></AnimatePresence>;
};

export default Customizer;
