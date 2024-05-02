// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { ipcRenderer, contextBridge } = require("electron");
const { platform } = require("os");
import robot from "@jitsi/robotjs";

const next = async () => {
  robot.keyTap("down");
};

const previous = async () => {
  robot.keyTap("up");
};

const firstSlide = async () => {
  robot.keyTap("home");
};

const lastSlide = async () => {
  robot.keyTap("end");
};

// Exposing functions to app
contextBridge.exposeInMainWorld("app", {
  platform: platform(), // create a property oj the app object for platform
  next: () => next(),
  previous: () => previous(),
  firstSlide: () => firstSlide(),
  lastSlide: () => lastSlide(),
});
