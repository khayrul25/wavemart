import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen pt-32 px-4 flex flex-col items-center">
      <div className="mb-8">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center animate-pulse">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold mb-4 tracking-tight text-center">
        Order Confirmed!
      </h1>
      
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Thank you for your purchase. We've received your order and are getting it ready to be shipped. We will send you an email with tracking information shortly.
      </p>

      <div className="bg-muted/50 p-6 rounded-2xl w-full max-w-md mb-10 text-center border">
        <p className="text-sm font-medium text-muted-foreground mb-1">
          Order Number
        </p>
        <p className="text-xl font-mono font-bold">
          ORD-{Math.floor(100000 + Math.random() * 900000)}
        </p>
      </div>
      
      <Link
        href="/products"
        className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
