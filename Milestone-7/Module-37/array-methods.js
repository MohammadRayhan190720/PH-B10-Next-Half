const brandProducts = [
  {
    productName: "Air Max 270",
    brand: "Nike",
    price: 150,
    category: "Shoes",
  },
  {
    productName: "Galaxy S23",
    brand: "Samsung",
    price: 999,
    category: "Smartphone",
  },
  {
    productName: "MacBook Air",
    brand: "Apple",
    price: 1200,
    category: "Laptop",
  },
  {
    productName: "Inspire 3 Fitness Tracker",
    brand: "Fitbit",
    price: 99,
    category: "Wearable",
  },
  {
    productName: "X-T30 II",
    brand: "Fujifilm",
    price: 899,
    category: "Camera",
  },
];

//map

const brandName = brandProducts.map(product => product.brand);
console.log(brandName);

//forEach

brandProducts.forEach(product => console.log(product.category));
