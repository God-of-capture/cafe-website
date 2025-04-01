import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const promotions = [
  {
    title: "Happy Hour",
    description: "50% off all drinks from 3PM to 5PM, Monday to Friday!",
    code: "HAPPYHOUR50"
  },
  {
    title: "Lunch Special",
    description: "Get a free snack with any meal purchase between 11AM and 2PM!",
    code: "LUNCHSNACK"
  },
  {
    title: "Weekend Brunch",
    description: "Enjoy our special brunch menu with 20% off, Saturday and Sunday from 9AM to 1PM!",
    code: "BRUNCH20"
  }
]

export default function Promotions() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{promo.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{promo.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-bold">Code: {promo.code}</span>
                <Button>Claim Offer</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

