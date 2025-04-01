import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">CaféDelights</h3>
            <p>Serving delicious meals, drinks, and snacks since 2023.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Café Street, Foodville, FC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@cafedelights.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-green-200"><Twitter size={24} /></a>
              <a href="#" className="hover:text-green-200"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 CaféDelights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

