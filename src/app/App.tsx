import type { Mod } from "@/types/globals";
import { loadMods } from "@/utils/load-mods";
import { toast } from "@/utils/toast";
import { useEffect, useState } from "react";

export default () => {
  const [mods, setMods] = useState<Mod[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMods = async () => {
      const res = loadMods();
      toast({ promise: res, loading: "Loading mods...", success: "Mods loaded successfully" });
      const result = await res;
      if (result.success) {
        setMods(result.success.data as Mod[]);
      } else if (result.error) {
        setError(`Error ${result.error.code}: ${result.error.message}`);
      }
      setLoading(false);
    };
    fetchMods();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading mods...</p>
      ) : !error ? (
        <>
          <p>{mods.length} mod(s) found</p>
          <ul>
            {mods.map((mod) => (
              <li key={mod.name}>{mod.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};
