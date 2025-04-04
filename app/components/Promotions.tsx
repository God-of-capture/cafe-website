import { Button } from "@/components/ui/button"

const promotions = [
  {
    title: "Happy Hour",
    description: "50% off on all drinks from 2 PM to 5 PM",
    buttonText: "View Menu"
  },
  {
    title: "Weekend Brunch",
    description: "All-you-can-eat brunch buffet every Saturday and Sunday",
    buttonText: "Learn More"
  }
]

export default function Promotions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
              <p className="text-gray-600 mb-4">{promo.description}</p>
              <Button>{promo.buttonText}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

