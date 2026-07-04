interface BrushStrokeProps {
  className?: string;
  color?: 'pink' | 'purple';
}

export default function BrushStroke({ className = '', color = 'pink' }: BrushStrokeProps) {
  const fill = color === 'pink' ? '#ff4081' : '#6200ea';

  return (
    <svg
      className={`brush-divider ${className}`}
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 45C40 20 80 60 120 35C160 10 200 55 240 30C280 5 320 50 360 25C375 18 390 30 395 40"
        stroke={fill}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 55C50 70 90 40 130 58C170 76 210 42 250 60C290 78 330 48 370 62"
        stroke={fill}
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
