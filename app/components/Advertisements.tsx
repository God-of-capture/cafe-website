import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const advertisements = [
  {
    title: "New Summer Menu",
    image: "/placeholder.svg?height=200&width=400",
    alt: "Summer drinks and snacks"
  },
  {
    title: "Loyalty Program",
    image: "/placeholder.svg?height=200&width=400",
    alt: "Loyalty card with stamps"
  }
]

export default function Advertisements() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What's New at CaféDelights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advertisements.map((ad, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image src={ad.image} alt={ad.alt} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{ad.title}</h3>
                  <p className="text-gray-600">Check out our latest offerings and programs!</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

