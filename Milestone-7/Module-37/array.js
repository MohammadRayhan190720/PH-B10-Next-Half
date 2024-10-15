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

const newProduct =   {
    productName: "X-T30 III",
    brand: "Sony",
    price: 1200,
    category: "Monitor",
  }

  //add newProduct in main array

  const newProducts = [...brandProducts , newProduct];
  // console.log(newProducts);

  //create a new array without one specific item
  const restArray = brandProducts.filter(
    (product) => product.brand !== "Samsung");
    console.log(restArray);