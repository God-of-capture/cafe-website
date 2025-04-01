import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const menuItems = [
  { category: 'Meals', items: [
    { id: 'grilled-chicken-salad', name: 'Grilled Chicken Salad', price: 12.99, description: 'Fresh mixed greens with grilled chicken breast, cherry tomatoes, and balsamic vinaigrette.' },
    { id: 'veggie-wrap', name: 'Veggie Wrap', price: 10.99, description: 'Whole wheat tortilla filled with hummus, mixed vegetables, and feta cheese.' },
    { id: 'quinoa-bowl', name: 'Quinoa Bowl', price: 11.99, description: 'Protein-packed quinoa with roasted vegetables, avocado, and tahini dressing.' },
  ]},
  { category: 'Drinks', items: [
    { id: 'iced-caramel-latte', name: 'Iced Caramel Latte', price: 4.99, description: 'Espresso with milk, caramel syrup, and ice.' },
    { id: 'green-tea-smoothie', name: 'Green Tea Smoothie', price: 5.49, description: 'Matcha green tea blended with banana, spinach, and almond milk.' },
    { id: 'fresh-orange-juice', name: 'Fresh Orange Juice', price: 3.99, description: 'Freshly squeezed orange juice.' },
  ]},
  { category: 'Snacks', items: [
    { id: 'chocolate-chip-cookie', name: 'Chocolate Chip Cookie', price: 2.49, description: 'Soft-baked cookie with dark chocolate chips.' },
    { id: 'fruit-and-nut-mix', name: 'Fruit & Nut Mix', price: 3.99, description: 'Assorted dried fruits and roasted nuts.' },
    { id: 'yogurt-parfait', name: 'Yogurt Parfait', price: 4.99, description: 'Greek yogurt layered with granola and fresh berries.' },
  ]},
]

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
        {menuItems.map((category) => (
          <div key={category.category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Link href={`/menu/${item.id}`} key={item.id}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="font-bold">${item.price.toFixed(2)}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
}

