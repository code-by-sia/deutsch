import React, { useState, useMemo, useCallback } from "react";

import Card from "../components/card";
import StatsInfo from "../components/stat-info";
import useVocab from "../hooks/vocab";
import useHotKey from "../hooks/hot-key";
import ToggleSwitch from "../components/toggle";
import "./practice-page.scss";

export default function DashboardPage() {
  const { stats, vocab, change } = useVocab();
  const [missed, setMissed] = useState(true);
  const [passed, setPassed] = useState(true);

  const index = useMemo(() => {
    const r = Math.random();
    if (missed && r < 0.5) return Math.floor(Math.random() * stats.missed);
    if (!passed)
      return Math.floor(Math.random() * stats.pending) + stats.missed;

    return (
      Math.floor(Math.random() * (stats.passed + stats.pending)) + stats.missed
    );
  }, [stats]);

  const card = vocab[index];

  const doPass = useCallback(
    (i) => change(card.value?.index, card?.value?.score + i),
    [card, change],
  );

  useHotKey({ key: "ArrowRight" }, () => doPass(-1), [doPass]);
  useHotKey({ key: "ArrowDown" }, () => doPass(0), [doPass]);
  useHotKey({ key: "ArrowLeft" }, () => doPass(1), [doPass]);

  return (
    <div className="page practice-page">
      <header>
        <StatsInfo {...stats} />

        <div className="filters">
          <ToggleSwitch label="Missed: " value={missed} onChange={setMissed} />
          <ToggleSwitch label="Passed: " value={passed} onChange={setPassed} />
        </div>
      </header>
      <Card
        className="large"
        id={card?.id}
        value={card?.value}
        onChange={change}
      />
    </div>
  );
}
