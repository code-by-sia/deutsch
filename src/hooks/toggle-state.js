import react, { useState, useCallback } from "react";

export default function useToggleState(a = false, b = true) {
  const [s, setS] = useState(a);
  const toggle = useCallback(() => setS((i) => (i == a ? b : a)), [a, b, setS]);

  return [s, toggle];
}
