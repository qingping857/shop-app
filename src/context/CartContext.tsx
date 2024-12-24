"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

// 定义购物车项目的数据结构
interface CartItem {
  id: string
  quantity: number
}

// 定义购物车 Context 的数据结构和方法
interface CartContextType {
  items: CartItem[]           // 购物车中的商品列表
  addToCart: (id: string) => void      // 添加商品到购物车
  removeFromCart: (id: string) => void  // 从购物车移除商品
  clearCart: () => void                 // 清空购物车
}

// 创建购物车 Context
const CartContext = createContext<CartContextType | undefined>(undefined)

// 购物车 Provider 组件：为整个应用提供购物车状态
export function CartProvider({ children }: { children: ReactNode }) {
  // 使用 useState 管理购物车状态
  const [items, setItems] = useState<CartItem[]>([])

  // 添加商品到购物车
  const addToCart = (id: string) => {
    setItems(currentItems => {
      // 查找商品是否已在购物车中
      const existingItem = currentItems.find(item => item.id === id)
      
      if (existingItem) {
        // 如果商品已存在，增加数量
        return currentItems.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // 如果商品不存在，添加新商品
      return [...currentItems, { id, quantity: 1 }]
    })
  }

  // 从购物车移除商品
  const removeFromCart = (id: string) => {
    setItems(currentItems =>
      currentItems.filter(item => item.id !== id)
    )
  }

  // 清空购物车
  const clearCart = () => {
    setItems([])
  }

  // 提供购物车状态和方法给子组件
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

// 自定义 Hook：方便组件使用购物车功能
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 