import type { Mod } from "@/types/globals";
import { getImage } from "@/utils/load-mods";
import { useEffect, useState } from "react";

interface ModCardProps {
  mod: Mod;
}

export default ({ mod }: ModCardProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(mod);
      console.log(src);
      if (!src) return;
      setImageSrc(src);
    };
    fetchImage();
  }, [mod]);

  return (
    <>
      <h2>{mod.name}</h2>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={mod.name}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
      )}
      {mod.supported_version && <p>Supported Version: {mod.supported_version}</p>}
      {mod.tags && mod.tags.length > 0 && <p>Tags: {mod.tags.join(", ")}</p>}
      {mod.dependencies && mod.dependencies.length > 0 && <p>Dependencies: {mod.dependencies.join(", ")}</p>}
    </>
  );
};
