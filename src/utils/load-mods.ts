// typescript
import { platform } from "@tauri-apps/plugin-os";

export function detectOS():
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
  | "unknown" {
  try {
    return platform();
  } catch {
    return "unknown"; // not running in Tauri or API failed
  }
}
