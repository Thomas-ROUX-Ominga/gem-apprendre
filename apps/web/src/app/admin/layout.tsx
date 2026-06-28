import type { Metadata } from 'next'
import '../../styles/admin.css'

export const metadata: Metadata = {
  title: {
    default: "Administration — Gem'Apprendre",
    template: "%s — Admin Gem'Apprendre",
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-root">{children}</div>
}
