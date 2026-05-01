"use client";

/* eslint-disable @next/next/no-img-element */

import { useCartStore } from "@/store/cart.store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, ChevronLeft } from "lucide-react";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { items, clearCart } = useCartStore();
  const router = useRouter();

  // Redirect if cart is empty
  if (items.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen pt-32 px-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link
          href="/products"
          className="text-primary hover:underline font-medium"
        >
          Go back to shopping
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call and payment processing
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1500);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const total = subtotal; // Assuming free shipping and no tax for now

  return (
    <div className="max-w-6xl mx-auto pt-24 pb-16 px-4 md:px-6 min-h-screen">
      <div className="mb-8">
        <Link
          href="/cart"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Cart
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Checkout Form */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
          <form
            id="checkout-form"
            onSubmit={handlePlaceOrder}
            className="space-y-10"
          >
            {/* Contact Info */}
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label className="mb-2" htmlFor="email">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <Label className="mb-2" htmlFor="phone">
                    Phone Number (optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label className="mb-2" htmlFor="fullName">
                    Full Name
                  </Label>
                  <Input id="fullName" required placeholder="John Doe" />
                </div>
                <div className="md:col-span-2">
                  <Label className="mb-2" htmlFor="address">
                    Street Address
                  </Label>
                  <Input id="address" required placeholder="123 Main St" />
                </div>
                <div>
                  <Label className="mb-2" htmlFor="city">
                    City
                  </Label>
                  <Input id="city" required placeholder="New York" />
                </div>
                <div>
                  <Label className="mb-2" htmlFor="postalCode">
                    Postal Code
                  </Label>
                  <Input id="postalCode" required placeholder="10001" />
                </div>
                <div className="md:col-span-2">
                  <Label className="mb-2" htmlFor="country">
                    Country
                  </Label>
                  <Input id="country" required placeholder="United States" />
                </div>
              </div>
            </section>

            {/* Payment Method (Mock) */}
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Payment Method
              </h2>
              <div className="p-4 border rounded-xl bg-gray-50/50 flex flex-col items-center justify-center gap-2 text-center text-muted-foreground h-32">
                <CreditCard className="w-8 h-8 opacity-50" />
                <p className="text-sm">
                  This is a mock checkout. No payment details are required.
                </p>
              </div>
            </section>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="border rounded-2xl p-6 bg-gray-50 sticky top-28">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 items-start">
                  <div className="relative w-16 h-16 rounded-lg bg-white border flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-full h-full object-contain mix-blend-multiply p-1"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full z-10 shadow-sm border border-white">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-sm font-medium line-clamp-2">
                      {item.product.title}
                    </h3>
                  </div>
                  <div className="pt-1 font-semibold text-sm">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-3 text-sm mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-medium text-foreground">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-8 flex justify-between items-end">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-3xl">${total.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-full shadow-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isProcessing ? "Processing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
