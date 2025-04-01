import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  { id: 1, name: 'Grilled Chicken Salad', category: 'Meals', price: '$12.99', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Iced Caramel Latte', category: 'Drinks', price: '$4.99', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Chocolate Chip Cookie', category: 'Snacks', price: '$2.49', image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Veggie Wrap', category: 'Meals', price: '$10.99', image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Green Tea Smoothie', category: 'Drinks', price: '$5.49', image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Fruit & Nut Mix', category: 'Snacks', price: '$3.99', image: '/placeholder.svg?height=200&width=200' },
]

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid

