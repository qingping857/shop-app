"use client"

import { Navbar } from "@/components/layout/Navbar"
import { ProductList } from "@/components/business/ProductList"
import { useCart } from "@/context/CartContext"

export default function Home() {
  const { addToCart } = useCart()

  return (
    <main>
      <Navbar />
      <div className="container mx-auto">
        <ProductList onAddToCart={addToCart} />
      </div>
    </main>
  )
}
