'use client'

import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Badge } from '@/components/ui/badge'

const CartIcon = () => {
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="relative">
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold rounded-full">
          {itemCount}
        </Badge>
      )}
    </div>
  )
}

export default CartIcon

