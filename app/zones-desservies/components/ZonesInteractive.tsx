'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Zone {
  id: string;
  title: string;
  description: string;
  cities: Array<{ name: string; url: string }>;
  span: number;
}

interface ZonesInteractiveProps {
  zones: Zone[];
}

export default function ZonesInteractive({ zones }: ZonesInteractiveProps) {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {zones.map((zone) => {
        const isActive = activeZone === zone.id;
        return (
          <div
            key={zone.id}
            className={`group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#F8F9F4] ${
              isActive ? 'scale-105' : 'scale-100'
            } ${zone.span === 2 ? 'lg:col-span-2' : zone.span === 3 ? 'lg:col-span-3' : ''}`}
            onClick={() => {
              setActiveZone(isActive ? null : zone.id);
            }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border-2 border-[#03144a]/10">
              {/* Header */}
              <div className="bg-white p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12 translate-x-4 -translate-y-2">
                </div>
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-3 ${isActive ? '' : ''} text-[#03144a]`}>
                    <Link
                      href={zone.cities?.[0]?.url || '#'}
                      className="hover:text-[#03144a] transition-colors text-[#03144a]"
                    >
                      {zone.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">{zone.description}</p>
                </div>
              </div>

              {/* Cities Grid */}
              <div
                className={`p-6 transition-all duration-500 ${
                  isActive ? 'max-h-[1000px] opacity-100' : 'max-h-20 opacity-70'
                } overflow-hidden bg-white rounded-b-3xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-700">
                    {zone.cities.length} communes
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 text-[#03144a]/60 transition-transform duration-300 ${
                      isActive ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                <div
                  className={`grid gap-3 ${
                    zone.span === 3
                      ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
                      : zone.span === 2
                      ? 'grid-cols-2 md:grid-cols-3'
                      : 'grid-cols-1'
                  }`}
                >
                  {zone.cities.map((city, cityIndex) => (
                    <Link
                      key={cityIndex}
                      href={city.url}
                      className={`group/city bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#03144a] border border-[#03144a]/10 hover:border-[#03144a]/30 text-[#03144a] hover:text-white`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="text-sm font-bold transition-colors text-[#03144a] group-hover/city:text-white"
                        >
                          {city.name}
                        </span>
                        <ArrowRight
                          className="w-3 h-3 text-[#03144a]/60 group-hover/city:text-white transform group-hover/city:translate-x-1 transition-all duration-200"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 