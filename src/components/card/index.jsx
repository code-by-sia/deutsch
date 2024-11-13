import React, { useCallback } from "react";
import useToggleState from "../../hooks/toggle-state";
import classNames from "classnames";

import "./card.scss";

function CardToolbar({ index, score = 0, onChange }) {
  return (
    <div className="card-toolbar">
      <button className="plus" onClick={() => onChange(index, score + 1)}>
        +
      </button>
      <span>{score === 0 ? "new" : score}</span>
      <button className="minus" onClick={() => onChange(index, score - 1)}>
        -
      </button>
    </div>
  );
}

export default function Card({ id, value, onChange }) {
  const [isToggled, toggle] = useToggleState();
  return (
    <div className={classNames({ toggled: isToggled }, "card")}>
      <section onClick={toggle}>
        <h1>{id}</h1>
        <p>{value.desc}</p>
      </section>

      <CardToolbar
        index={value.index}
        score={value.score}
        onChange={onChange}
      />
    </div>
  );
}
