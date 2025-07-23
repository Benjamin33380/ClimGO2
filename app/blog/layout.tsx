import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - ClimGo | Actualités et Conseils Climatisation',
  description: 'Découvrez nos derniers articles sur la climatisation, le chauffage et les solutions énergétiques. Conseils d\'experts et actualités du secteur.',
  keywords: 'blog climatisation, conseils chauffage, actualités énergétiques, ClimGo',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F8F9F4] my-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
