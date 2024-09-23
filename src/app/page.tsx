'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ShoppingCart, Search, ChevronDown, Star } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Flipkart</h1>
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Search for products, brands and more" 
                className="w-96 bg-white pl-10 text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              <ShoppingCart className="mr-2" size={20} />
              Cart
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto py-2">
          <ul className="flex justify-between">
            {['Electronics', 'TVs & Appliances', 'Men', 'Women', 'Baby & Kids', 'Home & Furniture', 'Sports', 'Books'].map((item) => (
              <li key={item} className="flex items-center cursor-pointer hover:text-blue-500">
                {item}
                <ChevronDown size={16} className="ml-1" />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        {/* Featured Products Carousel */}
        <Carousel className="mb-8">
          <CarouselContent>
            {['/images/image (1).jpeg','/images/image (2).jpeg','/images/image (3).jpeg'].map((imageUrl, index) => (
      <CarouselItem key={index}>
        <img src={imageUrl} alt={`Featured Product ${index + 1}`} className="w-full h-[400px] object-cover rounded-lg" />
      </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Product Grid */}
        <h2 className="text-2xl font-bold mb-4">Top Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <Card key={product} className="overflow-hidden">
              <img src={`/placeholder.svg?height=200&width=300&text=Product+${product}`} alt={`Product ${product}`} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Product Name</h3>
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm flex items-center">
                    4.5 <Star size={12} className="ml-1" />
                  </span>
                  <span className="text-sm text-gray-500 ml-2">(2345)</span>
                </div>
                <p className="text-lg font-bold">₹1,499</p>
                <p className="text-sm text-gray-500">
                  <span className="line-through">₹2,999</span>
                  <span className="text-green-500 ml-2">50% off</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Policy</h3>
            <ul className="space-y-2">
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}