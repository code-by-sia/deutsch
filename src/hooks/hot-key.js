import { useEffect } from "react";

export default function useHotKey(combination, callback) {
  useEffect(() => {
    const fn = (e) => {
      if (
        Object.entries(combination).every(([key, value]) => value === e[key])
      ) {
        callback(e);
      }
    };
    window.addEventListener("keydown", fn);

    return () => window.removeEventListener("keydown", fn);
  }, [combination]);
}
