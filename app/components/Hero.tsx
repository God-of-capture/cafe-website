import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className="bg-green-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to CaféDelights</h1>
        <p className="text-xl md:text-2xl mb-8">Discover our delicious meals, refreshing drinks, and tasty snacks!</p>
        <Button size="lg" className="bg-white text-green-800 hover:bg-green-100">Order Now</Button>
      </div>
    </div>
  )
}

export default Hero

