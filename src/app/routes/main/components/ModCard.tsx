import type { Mod } from "@/types/globals";
import { getImage } from "@/utils/load-mods";
import { useEffect, useState } from "react";
import { Link } from "wouter";

interface ModCardProps {
  mod: Mod;
}

export default ({ mod }: ModCardProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(mod);
      if (!src) return;
      setImageSrc(src);
    };
    fetchImage();
  }, [mod]);

  return (
    <div className="flex flex-row bg-gray-300 rounded-2xl p-2 mb-4 gap-4">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={mod.name}
          className="w-32 h-32 object-cover rounded-lg"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-500 flex items-center justify-center" />
      )}
      <div>
        <h2>{mod.name}</h2>
        {mod.supported_version && <p>Supported Version: {mod.supported_version}</p>}
        {mod.tags && mod.tags.length > 0 && <p>Tags: {mod.tags.join(", ")}</p>}
        {mod.dependencies && mod.dependencies.length > 0 && <p>Dependencies: {mod.dependencies.join(", ")}</p>}
        <Link href={`/mod/${encodeURIComponent(mod.local_path)}`}>Edit Mod</Link>
      </div>
    </div>
  );
};
