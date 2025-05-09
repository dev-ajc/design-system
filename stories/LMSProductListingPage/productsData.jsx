// Sample date
const initialProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 149.99,
      discountPrice: 129.99,
      category: "Audio",
      brand: "SoundMax",
      color: "Black",
      rating: 4.7,
      reviewCount: 243,
      inStock: true,
      tags: ["wireless", "bluetooth", "noise-cancelling"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Portable Bluetooth Speaker",
      price: 89.99,
      discountPrice: null,
      category: "Audio",
      brand: "SoundMax",
      color: "Blue",
      rating: 4.5,
      reviewCount: 187,
      inStock: true,
      tags: ["wireless", "bluetooth", "waterproof"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Ergonomic Wireless Mouse",
      price: 59.99,
      discountPrice: 49.99,
      category: "Computer Accessories",
      brand: "TechPro",
      color: "Silver",
      rating: 4.3,
      reviewCount: 156,
      inStock: false,
      tags: ["wireless", "ergonomic"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      price: 129.99,
      discountPrice: null,
      category: "Computer Accessories",
      brand: "GameElite",
      color: "Black",
      rating: 4.8,
      reviewCount: 320,
      inStock: true,
      tags: ["mechanical", "gaming", "rgb"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 5,
      name: "Ultra-Slim Laptop Stand",
      price: 45.99,
      discountPrice: 39.99,
      category: "Computer Accessories",
      brand: "TechPro",
      color: "Silver",
      rating: 4.6,
      reviewCount: 98,
      inStock: true,
      tags: ["portable", "adjustable"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      price: 119.99,
      discountPrice: 99.99,
      category: "Audio",
      brand: "SoundMax",
      color: "White",
      rating: 4.4,
      reviewCount: 215,
      inStock: true,
      tags: ["wireless", "bluetooth", "waterproof"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 7,
      name: "HD Webcam",
      price: 79.99,
      discountPrice: null,
      category: "Computer Accessories",
      brand: "TechPro",
      color: "Black",
      rating: 4.2,
      reviewCount: 76,
      inStock: true,
      tags: ["hd", "plug-and-play"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 8,
      name: "Smart Watch",
      price: 199.99,
      discountPrice: 179.99,
      category: "Wearables",
      brand: "TechPro",
      color: "Black",
      rating: 4.6,
      reviewCount: 289,
      inStock: true,
      tags: ["fitness-tracker", "notifications", "waterproof"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 9,
      name: "Wireless Charging Pad",
      price: 39.99,
      discountPrice: 29.99,
      category: "Mobile Accessories",
      brand: "PowerCharge",
      color: "White",
      rating: 4.4,
      reviewCount: 126,
      inStock: true,
      tags: ["wireless", "fast-charging", "compatible"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 10,
      name: "4K Ultra HD Monitor",
      price: 349.99,
      discountPrice: null,
      category: "Computer Accessories",
      brand: "DisplayTech",
      color: "Black",
      rating: 4.9,
      reviewCount: 173,
      inStock: true,
      tags: ["4k", "ultra-hd", "ips"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 11,
      name: "Ergonomic Office Chair",
      price: 249.99,
      discountPrice: 199.99,
      category: "Office Furniture",
      brand: "ComfortPlus",
      color: "Gray",
      rating: 4.7,
      reviewCount: 208,
      inStock: false,
      tags: ["ergonomic", "adjustable", "lumbar-support"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 12,
      name: "Portable Power Bank",
      price: 69.99,
      discountPrice: 54.99,
      category: "Mobile Accessories",
      brand: "PowerCharge",
      color: "Black",
      rating: 4.5,
      reviewCount: 157,
      inStock: true,
      tags: ["portable", "fast-charging", "high-capacity"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 13,
      name: "Smart Home Hub",
      price: 129.99,
      discountPrice: null,
      category: "Smart Home",
      brand: "HomeConnect",
      color: "White",
      rating: 4.3,
      reviewCount: 94,
      inStock: true,
      tags: ["voice-control", "automation", "compatible"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 14,
      name: "Professional Drawing Tablet",
      price: 179.99,
      discountPrice: 159.99,
      category: "Computer Accessories",
      brand: "ArtPro",
      color: "Black",
      rating: 4.8,
      reviewCount: 113,
      inStock: true,
      tags: ["pressure-sensitive", "wireless", "professional"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 15,
      name: "Fitness Smart Scale",
      price: 79.99,
      discountPrice: null,
      category: "Wearables",
      brand: "HealthTech",
      color: "White",
      rating: 4.4,
      reviewCount: 87,
      inStock: true,
      tags: ["bluetooth", "health-tracking", "app-compatible"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 16,
      name: "Mesh WiFi System",
      price: 299.99,
      discountPrice: 249.99,
      category: "Networking",
      brand: "NetConnect",
      color: "White",
      rating: 4.7,
      reviewCount: 142,
      inStock: true,
      tags: ["mesh", "whole-home", "high-speed"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 17,
      name: "Adjustable Standing Desk",
      price: 399.99,
      discountPrice: 349.99,
      category: "Office Furniture",
      brand: "ComfortPlus",
      color: "Oak",
      rating: 4.6,
      reviewCount: 76,
      inStock: false,
      tags: ["adjustable", "electric", "ergonomic"],
      image: "/api/placeholder/200/200"
    },
    {
      id: 18,
      name: "Smart LED Light Strips",
      price: 49.99,
      discountPrice: 39.99,
      category: "Smart Home",
      brand: "HomeConnect",
      color: "RGB",
      rating: 4.5,
      reviewCount: 118,
      inStock: true,
      tags: ["rgb", "voice-control", "app-compatible"],
      image: "/api/placeholder/200/200"
    }  
  ];

  export default initialProducts;