
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useShoppingBag } from '@/hooks/use-shopping-bag';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { formatCurrency } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export function ShoppingBag() {
  const { 
    items, 
    isBagOpen, 
    setBagOpen, 
    removeFromBag, 
    updateQuantity, 
    totalItems,
    subtotal,
  } = useShoppingBag();

  if (totalItems === 0) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="filled"
          size="icon"
          className="h-14 w-14 shadow-lg"
          onClick={() => setBagOpen(true)}
        >
          <i className="ri-shopping-bag-line text-2xl"></i>
        </Button>
        <div className="pointer-events-none absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold ring-2 ring-background">
          {totalItems}
        </div>
      </div>

      <Sheet open={isBagOpen} onOpenChange={setBagOpen}>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="px-6">
            <SheetTitle>Shopping Bag ({totalItems})</SheetTitle>
          </SheetHeader>
          <Separator />

          {items.length > 0 ? (
            <>
              <ScrollArea className="flex-1">
                <div className="flex flex-col gap-6 p-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-start gap-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          data-ai-hint={item.product.dataAiHint}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/store/${item.product.slug}`}
                          className="font-medium hover:underline"
                          onClick={() => setBagOpen(false)}
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-muted-foreground">{formatCurrency(item.product.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Button
                            variant="outline-dark"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <i className="ri-subtract-line text-xs" />
                          </Button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <Button
                            variant="outline-dark"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <i className="ri-add-line text-xs" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromBag(item.product.id)}
                          >
                            <i className="ri-delete-bin-line text-base" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <Separator />
              <SheetFooter className="p-6">
                <div className="w-full space-y-4">
                  <div className="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>{formatCurrency(subtotal)}</p>
                  </div>
                  <Alert>
                    <i className="ri-shopping-bag-line h-4 w-4" />
                    <AlertTitle className="text-xs">Pickup Information</AlertTitle>
                    <AlertDescription className="text-xs">
                      Orders are for pickup only and will be ready in ~15 minutes.
                    </AlertDescription>
                  </Alert>
                  <Button variant="filled" size="lg" className="w-full">
                    Continue to Checkout
                  </Button>
                </div>
              </SheetFooter>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <i className="ri-shopping-bag-line text-6xl text-muted-foreground" />
              <h3 className="font-semibold">Your bag is empty</h3>
              <p className="text-sm text-muted-foreground">
                Looks like you haven&apos;t added anything to your bag yet.
              </p>
              <Button variant="outline-dark" onClick={() => setBagOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
