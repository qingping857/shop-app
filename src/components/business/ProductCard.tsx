"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// 定义商品卡片组件的属性接口
interface ProductCardProps {
  id: string          // 商品ID
  name: string        // 商品名称
  price: number       // 商品价格
  image: string       // 商品图片URL
  onAddToCart: (id: string) => void  // 添加到购物车的回调函数
}

// 商品卡片组件：展示单个商品信息
export function ProductCard({ id, name, price, image, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* 商品图片区域 */}
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        {/* 商品信息区域 */}
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-xl font-bold text-primary">¥{price}</p>
        </div>
      </CardContent>
      {/* 操作按钮区域 */}
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => onAddToCart(id)}
        >
          加入购物车
        </Button>
      </CardFooter>
    </Card>
  )
} 