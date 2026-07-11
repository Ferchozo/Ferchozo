'use client';

import { palette } from '@/lib/colors';
import { useInView } from '@/hooks/useInView';

interface BrushStrokeProps {
  className?: string;
  color?: 'pink' | 'purple';
}

export default function BrushStroke({ className = '', color = 'pink' }: BrushStrokeProps) {
  const stroke = color === 'pink' ? palette.brandPink : palette.brandPurple;
  const { ref, inView } = useInView<SVGSVGElement>(0.2);

  return (
    <svg
      ref={ref}
      className={`brush-divider ${inView ? 'brush-draw' : ''} ${className}`}
      viewBox="0 0 600 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        className="brush-path brush-path-main"
        pathLength="1"
        d="M0 55C60 15 120 75 180 40C240 5 300 70 360 35C420 0 480 65 540 30C560 20 580 45 600 55"
        stroke={stroke}
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        className="brush-path brush-path-secondary"
        pathLength="1"
        d="M10 72C70 90 130 50 190 75C250 100 310 55 370 80C430 105 490 60 550 85"
        stroke={stroke}
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
