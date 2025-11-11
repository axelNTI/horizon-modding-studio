import type { Mod, Response } from "@/types/globals";
import { documentDir, homeDir } from "@tauri-apps/api/path";
import { join } from "@tauri-apps/api/path";
import { readDir, readFile } from "@tauri-apps/plugin-fs";
import { platform } from "@tauri-apps/plugin-os";

const paths = {
  macos: "/Paradox Interactive/Stellaris/mod",
  windows: "/Paradox Interactive/Stellaris/mod",
  linux: "/.local/share/Paradox Interactive/Stellaris/mod",
};

export const loadMods = async (): Response => {
  try {
    const os = platform();
    if (!["macos", "windows", "linux"].includes(os)) {
      return {
        error: {
          code: 500,
          message: "Unsupported OS",
        },
      };
    }

    const baseDir = os === "linux" ? await homeDir() : await documentDir();

    const modPath = baseDir + paths[os as keyof typeof paths];

    const mods = await readDir(modPath);

    const modFiles = mods.filter((mod) => mod.name.endsWith(".mod") && !mod.name.startsWith("ugc_"));

    // Convert mod files to objects with key value pairs for all properties using regex
    const modObjects = modFiles.map(async (mod) => {
      const content = await readFile(await join(modPath, mod.name));
      const raw = typeof content === "string" ? content : new TextDecoder().decode(content as Uint8Array);
      return {
        name: raw.match(/name="([^"]+)"/)?.[1] || "",
        path: raw.match(/path="([^"]+)"/)?.[1] || "",
        dependencies:
          (raw.match(/dependencies=\{([^}]+)\}/)?.[1] || "")
            .split("\n")
            .map((dep: string) => dep.trim())
            .filter((dep: string) => dep) || [],
        tags:
          (raw.match(/tags=\{([^}]+)\}/)?.[1] || "")
            .split("\n")
            .map((tag) => tag.trim())
            .filter((tag) => tag) || [],
        picture: raw.match(/picture="([^"]+)"/)?.[1] || "",
        remote_file_id: raw.match(/remote_file_id="([^"]+)"/)?.[1] || "",
        supported_version: raw.match(/supported_version="([^"]+)"/)?.[1] || "",
      } as Mod;
    });

    return {
      success: {
        code: 200,
        message: "Mods loaded successfully",
        data: await Promise.all(modObjects),
      },
    };
  } catch (error) {
    return {
      error: {
        code: 500,
        message: error instanceof Error ? error.message : String(error),
      },
    };
  }
};
