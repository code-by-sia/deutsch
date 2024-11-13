import React from "react";

import CardList from "../components/card-list";
import Progress from "../components/progress-bar";
import StatsInfo from "../components/stat-info";
import useVocab from "../hooks/vocab";
import { Link } from "react-router-dom";

import "./dashbaord-page.scss";

export default function DashboardPage() {
  const { stats, vocab, change } = useVocab();

  return (
    <div className="page dashboard-page">
      <header>
        <StatsInfo {...stats} />
        <span className="divider" />
        <Link to="/test"> &#9658; Flashcards </Link>
      </header>

      <section>
        <Progress stats={stats} />
        <CardList value={vocab} onChange={change} />
      </section>
    </div>
  );
}
