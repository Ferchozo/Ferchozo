'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const photos = [
  '/Recursos/img/fer2.png',
  '/Recursos/img/fer3.png',
  '/Recursos/img/fer4.png',
];

export default function HeroImage() {
  const [src, setSrc] = useState(photos[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * photos.length);
    setSrc(photos[index]);
  }, []);

  return (
    <Image
      src={src}
      alt="Imagen de perfil de Fernando Hidalgo"
      width={500}
      height={600}
      className="h-auto max-w-full rounded-xl"
      priority
    />
  );
}
