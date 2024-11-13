import react, { useState, useCallback, useEffect } from "react";
import data from "../data/index";

function changeScore(id, x, n) {
  if (id === x.value.index) {
    localStorage.x.value.score = n;
  }
  return x;
}

export default function useVocab() {
  const [vocab, setVocab] = useState([]);

  const load = useCallback(() => {
    let list = data.map(({ id, value }, i) => ({
      key: i,
      id,
      value: {
        index: i,
        desc: value,
        score: localStorage.getItem("_item_" + i) * 1,
      },
    }));

    list.sort((x, y) => x.value.score - y.value.score);
    setVocab(list);
  }, [setVocab]);

  const change = useCallback(
    (id, newScore) => {
      localStorage.setItem("_item_" + id, newScore);
      load();
    },
    [load],
  );

  useEffect(() => load(), [load]);

  return {
    vocab,
    change,
  };
}
