import React, { useMemo } from "react";

import CardList from "../components/card-list";
import Progress from "../components/progress-bar";
import useVocab from "../hooks/vocab";

import "./dashbaord-page.scss";

function StatText({ stats }) {
  return (
    <div className="stats-info">
      <label>
        <strong className="text-red-700">Missed:</strong> {stats.pending}
      </label>
      <label>
        <strong className="text-gray-700">Pending:</strong> {stats.missed}
      </label>
      <label>
        <strong className="text-teal-700">Passed:</strong> {stats.passed}
      </label>
    </div>
  );
}

export default function DashboardPage() {
  const { vocab, change } = useVocab();

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

  return (
    <div className="page dashboard-page">
      <header>
        <StatText stats={stats} />
      </header>

      <section>
        <Progress stats={stats} />
        <CardList value={vocab} onChange={change} />
      </section>
    </div>
  );
}
