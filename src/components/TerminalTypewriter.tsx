'use client';

import { useEffect, useState } from 'react';

const LINES = [
  "build('farmacia-pwa')",
  'deploy --prod',
  'ESP8266.connect()',
];

const TYPE_MS = 55;
const DELETE_MS = 30;
const PAUSE_MS = 2200;

export default function TerminalTypewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(LINES[0]);
      return;
    }

    const current = LINES[lineIndex];

    if (!deleting && text === current) {
      const pause = window.setTimeout(() => setDeleting(true), PAUSE_MS);
      return () => window.clearTimeout(pause);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % LINES.length);
      return;
    }

    const delay = deleting ? DELETE_MS : TYPE_MS;
    const timer = window.setTimeout(() => {
      setText((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, lineIndex, reducedMotion]);

  return (
    <p
      className="terminal-line font-mono text-sm text-brand-olive md:text-base"
      aria-label={`Terminal: ${text || LINES[lineIndex]}`}
    >
      <span className="text-brand-coral">&gt;</span> {text}
      {!reducedMotion && <span className="terminal-cursor" aria-hidden />}
    </p>
  );
}
