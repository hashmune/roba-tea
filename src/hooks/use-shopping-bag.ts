
'use client';

import { createContext, useContext, useState, useMemo } from 'react';
import type { Product } from '@/lib/placeholder-data';
import { useToast } from './use-toast';

export type CartItem = {
  product: Product;
  quantity: number;
};

type ShoppingBagContextType = {
  items: CartItem[];
  isBagOpen: boolean;
  setBagOpen: (isOpen: boolean) => void;
  addToBag: (product: Product) => void;
  removeFromBag: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalItems: number;
  subtotal: number;
};

const ShoppingBagContext = createContext<ShoppingBagContextType | undefined>(undefined);

export function ShoppingBagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isBagOpen, setBagOpen] = useState(false);
  const { toast } = useToast();

  const addToBag = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
    toast({
        title: "Added to Bag",
        description: `${product.name} is now in your shopping bag.`,
    });
    setBagOpen(true);
  };

  const removeFromBag = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromBag(productId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);
  
  const subtotal = useMemo(() => {
      return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }, [items]);

  return (
    <ShoppingBagContext.Provider
      value={{
        items,
        isBagOpen,
        setBagOpen,
        addToBag,
        removeFromBag,
        updateQuantity,
        totalItems,
        subtotal
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}

export function useShoppingBag() {
  const context = useContext(ShoppingBagContext);
  if (context === undefined) {
    throw new Error('useShoppingBag must be used within a ShoppingBagProvider');
  }
  return context;
}
