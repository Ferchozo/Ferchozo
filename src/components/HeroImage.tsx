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
}

export default function HeroImage({ circleColor = 'pink', className = '' }: HeroImageProps) {
  const [src, setSrc] = useState(assetUrl(photos[0]));

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setSrc(assetUrl(photos[index]));
  }, []);

  const circleClass =
    circleColor === 'pink' ? 'circle-backdrop-pink' : 'circle-backdrop-purple';

  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div
        className={`circle-backdrop ${circleClass} -right-4 top-8 h-72 w-72 md:-right-8 md:h-96 md:w-96`}
      />
      <Image
        src={src}
        alt="Imagen de perfil de Fernando Hidalgo"
        width={500}
        height={600}
        className="img-editorial relative z-10 mx-auto h-auto w-[85%] max-w-sm object-cover md:w-full"
        priority
      />
    </div>
  );
}
