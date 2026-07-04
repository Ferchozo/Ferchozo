interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'lg' | 'sm';
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({
  children,
  className = '',
  size = 'lg',
  align = 'left',
}: SectionTitleProps) {
  const alignClass =
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <h2
      className={`${size === 'lg' ? 'title-display' : 'title-display-sm'} ${alignClass} ${className}`}
    >
      {children}
    </h2>
  );
}
