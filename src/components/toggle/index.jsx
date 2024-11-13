import React from "react";
import "./toggle.scss";

export default function ToggleSwtich({ label, value, onChange }) {
  return (
    <label className="toggle-switch">
      <span>{label}</span>
      <input
        type="checkbox"
        value=""
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div />
    </label>
  );
}
