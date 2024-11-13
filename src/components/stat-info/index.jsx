import "./stats-info.scss";

function StatItem({ label, value, className }) {
  return (
    <label>
      <strong className={className}>{label}</strong> {value}
    </label>
  );
}

export default function StatInfo({ pending = 0, missed = 0, passed = 0 }) {
  return (
    <div className="stats-info">
      <StatItem className="missed" label="Missed:" value={missed} />
      <StatItem className="pending" label="Pending:" value={pending} />
      <StatItem className="passed" label="Passed:" value={passed} />
    </div>
  );
}
