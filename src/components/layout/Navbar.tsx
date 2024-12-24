"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription 
} from "@/components/ui/sheet"
import { useCart } from "@/context/CartContext"

// 导航栏组件：包含 Logo、搜索框、用户按钮和购物车
export function Navbar() {
  // 从购物车 Context 中获取购物车数据
  const { items } = useCart()
  
  // 计算购物车中的总商品数量
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo 区域 */}
        <div className="mr-4 font-bold text-xl">Shop App</div>

        {/* 搜索框区域 */}
        <div className="flex-1 mx-4">
          <Input
            type="search"
            placeholder="搜索商品..."
            className="md:w-[300px] lg:w-[400px]"
          />
        </div>

        {/* 用户操作区域 */}
        <div className="flex items-center space-x-4">
          {/* 用户按钮 */}
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          {/* 购物车抽屉 */}
          <Sheet>
            {/* 购物车按钮 */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {/* 购物车数量标记 */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              </Button>
            </SheetTrigger>
            {/* 购物车内容 */}
            <SheetContent>
              <SheetHeader>
                <SheetTitle>购物车</SheetTitle>
                <SheetDescription>
                  管理您的购物车商品
                </SheetDescription>
              </SheetHeader>
              {/* 购物车商品列表 */}
              <div className="flex-1 my-4">
                {items.length === 0 ? (
                  // 空购物车提示
                  <div className="text-center text-muted-foreground">
                    购物车是空的
                  </div>
                ) : (
                  // 购物车商品列表
                  <div className="space-y-4">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <span>商品 {item.id}</span>
                        <span>数量: {item.quantity}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* 结算按钮 */}
              <Button className="w-full" disabled={items.length === 0}>
                结算
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
} 