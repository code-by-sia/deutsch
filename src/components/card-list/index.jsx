import React, { useMemo } from "react";
import List from "../list/";
import Card from "../card/";
import useVocab from "../../hooks/vocab";
import "./card-list.scss";

function Progress({ value = [] }) {
  const stats = useMemo(
    () =>
      value.reduce(
        (p, c) => ({
          passed: p.passed + (c.value.score > 0 ? 1 : 0),
          pending: p.pending + (c.value.score === 0 ? 1 : 0),
          missed: p.missed + (c.value.score < 0 ? 1 : 0),
        }),
        { passed: 0, pending: 0, missed: 0 },
      ),
    [value],
  );

  const passed = (100 * stats.passed) / value.length;
  const pending = (100 * stats.pending) / value.length;
  const missed = (100 * stats.missed) / value.length;

  return (
    <header className="progress">
      <i className="passed" style={{ width: passed + "%" }}>
        {stats.passed}
      </i>
      <i className="pending" style={{ width: pending + "%" }}>
        {stats.pending}
      </i>
      <i className="missed" style={{ width: missed + "%" }}>
        {stats.missed}
      </i>
    </header>
  );
}

export default function CardList() {
  const { vocab, change } = useVocab();

  return (
    <div>
      <Progress value={vocab} />
      <List className="card-list" view={Card} value={vocab} onChange={change} />
    </div>
  );
}
