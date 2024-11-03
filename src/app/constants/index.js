import {
  bookshelf,
  chair,
  cloth,
  customer,
  delivery,
  eye,
  heart,
  joystick,
  keyboard,
  monitor,
  Right,
  secure,
  speaker,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "home",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "about",
  },
  {
    id: "signup",
    title: "signup",
  },
];

export const listItems = [
  {
    id: 0,
    title: "Woman’s Fashion",
    image: Right,
  },
  {
    id: 1,
    title: "Men’s Fashion",
    image: Right,
  },
  {
    id: 2,
    title: "Electronics",
  },
  {
    id: 3,
    title: "Home & Lifestyle",
  },
  {
    id: 4,
    title: "Medicine",
  },
  {
    id: 5,
    title: "Sports & Outdoor",
  },
  {
    id: 6,
    title: "Baby’s & Toys",
  },
  {
    id: 7,
    title: "Groceries & Pets",
  },
  {
    id: 8,
    title: "Health & Beauty",
  },
];

export const SalesItems = [
  {
    id: 0,
    title: "HAVIT HV-G92 Gamepad",
    discounted_price: "120",
    discount: "40%",
    price: "160",
    rating: 2,
    image: joystick,
    heart: heart,
    eye: eye,
  },
  {
    id: 1,
    title: "AK-900 Wired Keyboard",
    discounted_price: "960",
    discount: "35%",
    price: "1160",
    rating: 3,
    image: keyboard,
    heart: heart,
    eye: eye,
  },
  {
    id: 2,
    title: "IPS LCD Gaming Monitor",
    discounted_price: "370",
    discount: "30%",
    price: "470",
    rating: 5,
    image: monitor,
    heart: heart,
    eye: eye,
  },
  {
    id: 3,
    title: "S-Series Comfort Chair ",
    discounted_price: "375",
    discount: "20%",
    price: "400",
    rating: 3,
    image: chair,
    heart: heart,
    eye: eye,
  },
  {
    id: 4,
    title: "IPS LCD Gaming Monitor",
    discounted_price: "370",
    discount: "30%",
    price: "470",
    rating: 4,
    image: monitor,
    heart: heart,
    eye: eye,
  },
  {
    id: 5,
    title: "S-Series Comfort Chair ",
    discounted_price: "375",
    discount: "20%",
    price: "400",
    rating: 3,
    image: chair,
    heart: heart,
    eye: eye,
  },
];

export const bestSelling = [
  {
    id: 0,
    title: "The north coat",
    discounted_price: "120",
    price: "160",
    rating: 5,
    image: cloth,
    heart: heart,
    eye: eye,
    sold: "12",
  },
  {
    id: 1,
    title: "Gucci duffle bag",
    discounted_price: "370",
    price: "470",
    rating: 1,
    image: monitor,
    heart: heart,
    eye: eye,
    sold: "144",
  },
  {
    id: 2,
    title: "RGB liquid CPU Cooler",
    discounted_price: "375",
    price: "400",
    rating: 3,
    image: bookshelf,
    heart: heart,
    eye: eye,
    sold: "155",
  },
  {
    id: 3,
    title: "Small BookSelf",
    discounted_price: "375",
    price: "400",
    rating: 5,
    image: speaker,
    heart: heart,
    eye: eye,
    sold: "1223",
  },
];


export const servicesItems = [
  {
    id: 0,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    image: delivery,
  },
  {
    id: 1,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    image: customer,
  },
  {
    id: 2,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    image: secure,
  },
];
