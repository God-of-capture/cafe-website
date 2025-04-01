import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">About CaféDelights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="CaféDelights interior" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Welcome to CaféDelights, where we've been serving delicious meals, refreshing drinks, and tasty snacks since 2023. Our passion is to provide a warm and inviting atmosphere where our customers can enjoy high-quality food and beverages.
            </p>
            <p className="text-lg mb-4">
              At CaféDelights, we believe in using fresh, locally-sourced ingredients to create our menu items. Our team of skilled chefs and baristas work tirelessly to ensure that every dish and drink is prepared to perfection.
            </p>
            <p className="text-lg">
              Whether you're stopping by for a quick breakfast, a leisurely lunch, or an afternoon snack, we're committed to making your visit to CaféDelights a delightful experience. Thank you for choosing us as your go-to café!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

