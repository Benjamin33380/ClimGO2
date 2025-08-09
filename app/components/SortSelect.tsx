'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface SortSelectProps {
  defaultValue: string;
}

export default function SortSelect({ defaultValue }: SortSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    params.delete('page'); // Retour à la première page lors du changement de tri
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <select 
      defaultValue={defaultValue}
      onChange={(e) => handleSortChange(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03144a]"
    >
      <option value="recent">Plus récent</option>
      <option value="oldest">Plus ancien</option>
      <option value="popular">Plus populaire</option>
      <option value="rating">Mieux noté</option>
    </select>
  );
} 