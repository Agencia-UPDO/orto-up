'use client';

import { useState } from 'react';

export default function MapEmbed({ src, title }: { src: string; title: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative rounded-1 overflow-hidden">
      <iframe
        src={src}
        width="100%"
        height="400"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        title={title}
      ></iframe>
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="position-absolute top-0 start-0 w-100 h-100 border-0 bg-transparent"
          style={{ cursor: 'pointer' }}
          aria-label="Clique para interagir com o mapa"
        ></button>
      )}
    </div>
  );
}
