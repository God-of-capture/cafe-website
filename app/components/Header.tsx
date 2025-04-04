import Link from 'next/link'
import { Coffee, UtensilsCrossed, Cookie, Info, PhoneCall, FileText } from 'lucide-react'
import CartIcon from './CartIcon'

const Header = () => {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold">CaféDelights</Link>
        <nav>
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 items-center">
            <li>
              <Link href="/menu" className="flex items-center hover:text-green-200">
                <UtensilsCrossed className="mr-2" size={20} />
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center hover:text-green-200">
                <Info className="mr-2" size={20} />
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center hover:text-green-200">
                <PhoneCall className="mr-2" size={20} />
                Contact
              </Link>
            </li>
            <li>
              <Link href="/license" className="flex items-center hover:text-green-200">
                <FileText className="mr-2" size={20} />
                License
              </Link>
            </li>
            <li>
              <Link href="/cart" className="flex items-center hover:text-green-200">
                <CartIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

