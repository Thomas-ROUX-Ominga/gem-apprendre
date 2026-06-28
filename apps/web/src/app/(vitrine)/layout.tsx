import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BottomBar from '@/components/BottomBar'
import Tarteaucitron from '@/components/Tarteaucitron'

export default function VitrineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ga-page">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <BottomBar />
      <Tarteaucitron />
    </div>
  )
}
