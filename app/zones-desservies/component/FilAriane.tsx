'use client';

import Link from 'next/link';

interface FilArianeProps {
  items: { label: string; href?: string }[];
}

export default function FilAriane({ items }: FilArianeProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-[#03144A]/80 mb-4 px-4 md:px-0">
      <ul className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:underline hover:text-[#dc2626]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#dc2626] font-semibold">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="text-[#03144A]/50">›</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
