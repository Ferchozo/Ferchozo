'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { assetUrl } from '@/lib/config';

const photos = [
  '/Recursos/img/fer2.png',
  '/Recursos/img/fer3.png',
  '/Recursos/img/fer4.png',
];

interface HeroImageProps {
  circleColor?: 'pink' | 'purple';
  className?: string;
  size?: 'lg' | 'md';
}

export default function HeroImage({
  circleColor = 'pink',
  className = '',
  size = 'lg',
}: HeroImageProps) {
  const [src, setSrc] = useState(assetUrl(photos[0]));

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setSrc(assetUrl(photos[index]));
  }, []);

  const circleClass =
    circleColor === 'pink' ? 'circle-backdrop-pink' : 'circle-backdrop-purple';

  const circleSize =
    size === 'lg'
      ? 'h-[22rem] w-[22rem] md:h-[32rem] md:w-[32rem]'
      : 'h-64 w-64 md:h-80 md:w-80';

  const imgSize = size === 'lg' ? 'w-[110%] max-w-none -ml-[5%]' : 'w-full max-w-sm';

  return (
    <div className={`relative mx-auto ${size === 'lg' ? 'max-w-lg' : 'max-w-xs'} ${className}`}>
      <div
        className={`circle-backdrop ${circleClass} ${circleSize} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      />
      <Image
        src={src}
        alt="Imagen de perfil de Fernando Hidalgo"
        width={560}
        height={680}
        className={`img-editorial relative z-10 mx-auto object-cover ${imgSize}`}
        priority
      />
    </div>
  );
}
