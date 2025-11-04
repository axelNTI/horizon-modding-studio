// typescript
import { platform } from "@tauri-apps/plugin-os";

const detectOS = ():
  | "macos"
  | "windows"
  | "linux"
  | "ios"
  | "freebsd"
  | "dragonfly"
  | "netbsd"
  | "openbsd"
  | "solaris"
  | "android"
  | "unknown" => {
  try {
    return platform();
  } catch {
    return "unknown"; // not running in Tauri or API failed
  }
};

const baseDir = {
  macos: "~/Documents",
  windows: "~/Documents",
  linux: "~/.local/share",
};

const paths = {
  macos: `${baseDir.macos}/Paradox Interactive/Stellaris/mod`,
  windows: `${baseDir.windows}/Paradox Interactive/Stellaris/mod`,
  linux: `${baseDir.linux}/Paradox Interactive/Stellaris/mod`,
};

export const loadMods = async () => {
  const os = detectOS();
};
