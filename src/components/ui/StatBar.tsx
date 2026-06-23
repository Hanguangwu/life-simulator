interface StatBarProps {
  name: string;
  value: number;
  icon: string;
  color: string;
}

export function StatBar({ name, value, icon, color }: StatBarProps) {
  return (
    <div className="stat-bar">
      <div className="stat-bar-header">
        <span className="stat-bar-icon">{icon}</span>
        <span className="stat-bar-name">{name}</span>
        <span className="stat-bar-value">{value}</span>
      </div>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
