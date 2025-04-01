'use client'

import { useParams } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useCart } from '../../context/CartContext'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const menuItems = [
  { id: 'grilled-chicken-salad', name: 'Grilled Chicken Salad', price: 12.99, description: 'Fresh mixed greens with grilled chicken breast, cherry tomatoes, and balsamic vinaigrette.' },
  { id: 'veggie-wrap', name: 'Veggie Wrap', price: 10.99, description: 'Whole wheat tortilla filled with hummus, mixed vegetables, and feta cheese.' },
  { id: 'quinoa-bowl', name: 'Quinoa Bowl', price: 11.99, description: 'Protein-packed quinoa with roasted vegetables, avocado, and tahini dressing.' },
  { id: 'iced-caramel-latte', name: 'Iced Caramel Latte', price: 4.99, description: 'Espresso with milk, caramel syrup, and ice.' },
  { id: 'green-tea-smoothie', name: 'Green Tea Smoothie', price: 5.49, description: 'Matcha green tea blended with banana, spinach, and almond milk.' },
  { id: 'fresh-orange-juice', name: 'Fresh Orange Juice', price: 3.99, description: 'Freshly squeezed orange juice.' },
  { id: 'chocolate-chip-cookie', name: 'Chocolate Chip Cookie', price: 2.49, description: 'Soft-baked cookie with dark chocolate chips.' },
  { id: 'fruit-and-nut-mix', name: 'Fruit & Nut Mix', price: 3.99, description: 'Assorted dried fruits and roasted nuts.' },
  { id: 'yogurt-parfait', name: 'Yogurt Parfait', price: 4.99, description: 'Greek yogurt layered with granola and fresh berries.' },
]

export default function MenuItemPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const item = menuItems.find(item => item.id === params.id)

  if (!item) {
    return <div>Item not found</div>
  }

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Image 
            src={`/placeholder.svg?height=400&width=600`} 
            alt={item.name} 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-xl mb-4">${item.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{item.description}</p>
          <Button onClick={handleAddToCart} size="lg">Add to Cart</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

