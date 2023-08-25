const products = [
  {
    name: "Ideapad520",
    category: "laptop",
    price: 500,
  },
  {
    name: "Ideapad530",
    category: "laptop",
    price: 600,
  },
  {
    name: "Ideapad540",
    category: "laptop",
    price: 700,
  },
  {
    name: "Ideapad550",
    category: "laptop",
    price: 800,
  },
  {
    name: "Iphone11",
    category: "phone",
    price: 900,
  },
  {
    name: "Iphone12",
    category: "phone",
    price: 1000,
  },
  {
    name: "Iphone13",
    category: "phone",
    price: 1100,
  },
  {
    name: "Iphone14",
    category: "phone",
    price: 1200,
  },
];

const categorizer = function (arr) {
  const phoneArray = arr.filter((item) => item.category === "phone");
  const laptopArray = arr.filter((item) => item.category === "laptop");
  const sumPhone = phoneArray.reduce((acc, value) => acc + value.price, 0);
  const sumlaptop = laptopArray.reduce((acc, value) => acc + value.price, 0);

  return { sumPhone, sumlaptop };
};
console.log(categorizer(products));
