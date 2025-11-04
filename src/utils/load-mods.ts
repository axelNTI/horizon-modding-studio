import type { Mod, Response } from "@/types/globals";
import { BaseDirectory, readDir } from "@tauri-apps/plugin-fs";
// typescript
import { platform } from "@tauri-apps/plugin-os";

const paths = {
  macos: "/Paradox Interactive/Stellaris/mod",
  windows: "/Paradox Interactive/Stellaris/mod",
  linux: "/.local/share/Paradox Interactive/Stellaris/mod",
};

export const loadMods = async () => {
  const os = platform();
  if (!["macos", "windows", "linux"].includes(os)) {
    return {
      error: {
        code: 500,
        message: "Unsupported OS",
      },
    } as unknown as Response;
  }

  const baseDir = os === "linux" ? BaseDirectory.Home : BaseDirectory.Document;

  // Create an array of all .mod files in the directory
  const modPath = paths[os as keyof typeof paths];

  const mods = await readDir(modPath, { baseDir });

  const modFiles = mods.filter((mod) => mod.name.endsWith(".mod") && !mod.name.startsWith("ugc_"));

  //   name="SomeMod"
  // path="mod/SomeMod"
  // dependencies={
  // 	"othermod"
  // 	"another mod"
  // }
  // tags={
  // 	"Graphics"
  // 	"Economy"
  // 	"Overhaul"
  // }
  // picture="thumbnail.png"
  // remote_file_id="1234567890"
  // supported_version="v3.12.*"

  // Convert mod files to objects with key value pairs for all properties using regex
  const modObjects = modFiles.map((mod) => {
    return {
      name: mod.name.match(/name="([^"]+)"/)?.[1] || "",
      path: mod.name.match(/path="([^"]+)"/)?.[1] || "",
      dependencies:
        mod.name
          .match(/dependencies=\{([^}]+)\}/)?.[1]
          .split("\n")
          .map((dep) => dep.trim())
          .filter((dep) => dep) || [],
      tags:
        mod.name
          .match(/tags=\{([^}]+)\}/)?.[1]
          .split("\n")
          .map((tag) => tag.trim())
          .filter((tag) => tag) || [],
      picture: mod.name.match(/picture="([^"]+)"/)?.[1] || "",
      remote_file_id: mod.name.match(/remote_file_id="([^"]+)"/)?.[1] || "",
      supported_version: mod.name.match(/supported_version="([^"]+)"/)?.[1] || "",
    } as Mod;
  });

  return {
    success: {
      code: 200,
      message: "Mods loaded successfully",
      data: modObjects,
    },
  } as unknown as Response;
};
