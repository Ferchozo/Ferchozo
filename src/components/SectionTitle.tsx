interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({
  children,
  className = '',
  align = 'left',
}: SectionTitleProps) {
  const alignClass =
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <h2 className={`title-display ${alignClass} ${className}`}>{children}</h2>
  );
}
