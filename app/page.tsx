import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Promotions from './components/Promotions'
import Advertisements from './components/Advertisements'
import Footer from './components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Advertisements />
        <ProductGrid />
        <Promotions />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/menu">
              <Button size="lg">View Full Menu</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">About Us</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

