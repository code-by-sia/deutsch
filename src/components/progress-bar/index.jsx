import React, { useMemo } from "react";

import "./progress-bar.scss";

export default function Progress({ stats }) {
  const total = stats.passed + stats.pending + stats.missed;
  const passed = (100 * stats.passed) / total;
  const pending = (100 * stats.pending) / total;
  const missed = (100 * stats.missed) / total;

  return (
    <div className="progress-bar">
      <i className="missed" style={{ height: missed + "%" }} />
      <i className="pending" style={{ height: pending + "%" }} />
      <i className="passed" style={{ height: passed + "%" }} />
    </div>
  );
}
