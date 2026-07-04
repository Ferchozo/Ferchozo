'use client';

import { useEffect, useState } from 'react';

const SYMBOLS = ['</>', '{ }', '[ ]', '=>'];
const INTERVAL_MS = 3500;

export default function CodeSymbol() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % SYMBOLS.length);
        setVisible(true);
      }, 400);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <span
      className={`title-display code-symbol transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden
    >
      {SYMBOLS[index]}
    </span>
  );
}
