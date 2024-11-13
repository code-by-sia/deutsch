import React, { useMemo } from "react";
import List from "../list/";
import Card from "../card/";

import "./card-list.scss";

export default function CardList({ value, onChange }) {
  return (
    <List className="card-list" view={Card} value={value} onChange={onChange} />
  );
}
