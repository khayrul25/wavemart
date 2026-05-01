import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with subtle image texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[image:url('/images/hero.svg')] bg-no-repeat bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary bg-primary/10 ring-1 ring-inset ring-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          New Arrivals: Spring Collection 2026
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
          Everything you need, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            delivered to your door.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
          Discover a curated collection of premium products at unbeatable prices. From the latest tech gadgets to everyday essentials, we've got you covered.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
          >
            Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link 
            href="/products?categoryId=2" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-all shadow-sm hover:-translate-y-1"
          >
            Browse Electronics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
