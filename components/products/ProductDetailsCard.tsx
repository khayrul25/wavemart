/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/services/product.service";
import { useState } from "react";
import Image from "next/image";

const ProductDetailsCard = ({ product }: { product: Product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="overflow-hidden p-0 ring-0">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
                height={500}
                width={500}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    height={100}
                    width={100}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category.name}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-3xl font-bold text-primary">
                ${product.price}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Quantity
              </label>
              <div className="flex items-center space-x-3 mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-2 text-sm text-gray-600">
              <p>• Free shipping on orders over $100</p>
              <p>• 30-day return policy</p>
              <p>• Secure checkout</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;
