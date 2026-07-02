// Holberton-üslubu qırmızı dairəvi progress halqası.

interface Props {
  value: number; // 0-100
  size?: number;
  stroke?: number;
  label?: string;
}

export default function RadialProgress({
  value,
  size = 120,
  stroke = 10,
  label,
}: Props) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#33333f"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e0143f"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute flex flex-col items-center leading-none">
        <span className="text-2xl font-bold text-white">{clamped}%</span>
        {label && <span className="mt-1 text-xs text-muted">{label}</span>}
      </div>
    </div>
  );
}
