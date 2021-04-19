import { IProduct } from "../models";
import { IData } from "./IData";
import Image from "../assets/images/placeholder.png";

const sampleProducts: IProduct[] = [
  {
    id: 1,
    code: "001",
    description: "Muffin 1",
    images: [Image],
    price: 2.99
  },
  {
    id: 2,
    code: "002",
    description: "Muffin 2",
    images: [Image],
    price: 2.99
  },
  {
    id: 3,
    code: "003",
    description: "Muffin 3",
    images: [Image],
    price: 2.99
  },
  {
    id: 4,
    code: "004",
    description: "Muffin 4",
    images: [Image],
    price: 2.99
  },
  {
    id: 5,
    code: "005",
    description: "Muffin 5",
    images: [Image],
    price: 2.99
  },
  {
    id: 6,
    code: "006",
    description: "Muffin 6",
    images: [Image],
    price: 2.99
  },
  {
    id: 7,
    code: "007",
    description: "Muffin 7",
    images: [Image],
    price: 2.99
  },
  {
    id: 8,
    code: "008",
    description: "Muffin 8",
    images: [Image],
    price: 2.99
  },
  {
    id: 9,
    code: "009",
    description: "Muffin 9",
    images: [Image],
    price: 2.99
  },
  {
    id: 10,
    code: "010",
    description: "Muffin 10",
    images: [Image],
    price: 2.99
  }
];

export const Data: IData = {
  getProduct: (id: number) => {
    let promise = new Promise<IProduct | null>((resolve, reject) => {
      let product: IProduct | null =
        sampleProducts.find((item) => item.id === id) || null;
      return product;
    });
    return promise;
  },
  getProducts: () => {
    let promise = new Promise<IProduct[]>((resolve, reject) => {
      resolve(sampleProducts);
    });
    return promise;
  }
};
