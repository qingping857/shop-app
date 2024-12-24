"use client"

import { ProductCard } from "./ProductCard"

// 模拟商品数据（在实际应用中，这些数据通常来自API）
const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "商品 1",
    price: 99,
    image: "https://picsum.photos/seed/1/400"
  },
  {
    id: "2",
    name: "商品 2",
    price: 199,
    image: "https://picsum.photos/seed/2/400"
  },
  {
    id: "3",
    name: "商品 3",
    price: 299,
    image: "https://picsum.photos/seed/3/400"
  },
  {
    id: "4",
    name: "商品 4",
    price: 399,
    image: "https://picsum.photos/seed/4/400"
  }
]

// 定义商品列表组件的属性接口
interface ProductListProps {
  onAddToCart: (id: string) => void  // 添加到购物车的回调函数
}

// 商品列表组件：展示所有商品
export function ProductList({ onAddToCart }: ProductListProps) {
  return (
    // 使用 Grid 布局，响应式调整列数
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {/* 遍历商品数据，为每个商品创建一个商品卡片组件 */}
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
} 