import React, { useMemo, useCallback } from "react";

import Card from "../components/card";
import StatsInfo from "../components/stat-info";
import useVocab from "../hooks/vocab";
import useHotKey from "../hooks/hot-key";

import "./practice-page.scss";

export default function DashboardPage() {
  const { stats, vocab, change } = useVocab();

  const index = useMemo(() => {
    const r = Math.random();
    if (r < 0.5) return Math.floor(Math.random() * stats.missed);
    return (
      Math.floor(Math.random() * (stats.passed + stats.pending)) + stats.missed
    );
    return 0;
  }, [stats]);

  const card = vocab[index];

  const doPass = useCallback(
    (i) => {
      change(card.value?.index, card?.value?.score + i);
    },
    [card?.value, change],
  );

  useHotKey({ key: "ArrowRight" }, () => doPass(-1), [doPass]);
  useHotKey({ key: "ArrowDown" }, () => doPass(0), [doPass]);
  useHotKey({ key: "ArrowLeft" }, () => doPass(1), [doPass]);

  return (
    <div className="page practice-page">
      <Card
        className="large"
        id={card?.id}
        value={card?.value}
        onChange={change}
      />
      <footer>
        <StatsInfo {...stats} />
      </footer>
    </div>
  );
}
