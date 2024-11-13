import react, { useState, useCallback, useMemo, useEffect } from "react";
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

  const stats = useMemo(
    () =>
      vocab.reduce(
        (p, c) => ({
          passed: p.passed + (c.value.score > 0 ? 1 : 0),
          pending: p.pending + (c.value.score === 0 ? 1 : 0),
          missed: p.missed + (c.value.score < 0 ? 1 : 0),
        }),
        { passed: 0, pending: 0, missed: 0 },
      ),
    [vocab],
  );

  useEffect(() => load(), [load]);

  return {
    vocab,
    stats,
    change,
  };
}
