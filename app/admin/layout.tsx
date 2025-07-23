import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administration - ClimGo',
  description: 'Espace d\'administration ClimGo',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
} 