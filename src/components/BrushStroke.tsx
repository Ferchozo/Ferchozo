interface BrushStrokeProps {
  className?: string;
  color?: 'pink' | 'purple';
}

export default function BrushStroke({ className = '', color = 'pink' }: BrushStrokeProps) {
  const fill = color === 'pink' ? '#ff4081' : '#6200ea';

  return (
    <svg
      className={`brush-divider ${className}`}
      viewBox="0 0 600 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 55C60 15 120 75 180 40C240 5 300 70 360 35C420 0 480 65 540 30C560 20 580 45 600 55"
        stroke={fill}
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M10 72C70 90 130 50 190 75C250 100 310 55 370 80C430 105 490 60 550 85"
        stroke={fill}
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
