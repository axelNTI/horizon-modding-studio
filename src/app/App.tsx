import type { Mod } from "@/types/globals";
import { loadMods } from "@/utils/load-mods";
import { useEffect, useState } from "react";

export default () => {
  const [mods, setMods] = useState<Mod[]>([]);

  useEffect(() => {
    const fetchMods = async () => {
      const res = await loadMods();
      if (res.success) {
        setMods(res.success.data as Mod[]);
      }
    };

    fetchMods();
  }, []);

  return (
    <div>
      <h1>Loaded Mods</h1>
      <ul>
        {mods.map((mod) => (
          <li key={mod.name}>{mod.name}</li>
        ))}
      </ul>
    </div>
  );
};
