"use client";

import { useCartStore } from "@/store/cart.store";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-4 flex flex-col items-center">
        <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-sm">
          Looks like you haven&apos;t added anything to your cart yet. Browse
          our categories and find something you love!
        </p>
        <Link
          href="/products"
          className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pt-28 pb-16 px-4 md:px-6 min-h-screen">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items List */}
        <div className="flex-1 space-y-6">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col sm:flex-row gap-4 p-4 border rounded-2xl bg-card shadow-sm"
            >
              {/* Product Image */}
              <div className="w-full sm:w-32 aspect-square rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-grow py-1">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    {item.product.category?.name && (
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">
                        {item.product.category.name}
                      </span>
                    )}
                    <h2 className="font-semibold text-base line-clamp-2 leading-snug">
                      {item.product.title}
                    </h2>
                  </div>
                  <p className="font-bold text-lg whitespace-nowrap">
                    ${item.product.price}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border rounded-full overflow-hidden bg-muted/30">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          Math.max(1, item.quantity - 1),
                        )
                      }
                      className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-2 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-500/80 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[340px] flex-shrink-0">
          <div className="border rounded-2xl p-6 bg-gray-50/50 sticky top-28">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>
                  Subtotal (
                  {items.reduce((acc, item) => acc + item.quantity, 0)} items)
                </span>
                <span className="font-medium text-foreground">
                  $
                  {items
                    .reduce(
                      (acc, item) => acc + item.product.price * item.quantity,
                      0,
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax</span>
                <span className="font-medium text-foreground">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="border-t pt-4 mb-8 flex justify-between items-end">
              <span className="font-bold text-base">Total</span>
              <span className="font-bold text-2xl">
                $
                {items
                  .reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 transition-all block text-center"
            >
              Proceed to Checkout
            </Link>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Secure checkout. 30-day returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
