import { IOrderHeader, IOrderRow, IProduct } from "../models";
import { IData } from "./IData";
import Image from "../assets/images/placeholder.png";

const sampleProducts: IProduct[] = [
  {
    id: 1,
    code: "001",
    description: "Muffin 1",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 2,
    code: "002",
    description: "Muffin 2",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 3,
    code: "003",
    description: "Muffin 3",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 4,
    code: "004",
    description: "Muffin 4",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 5,
    code: "005",
    description: "Muffin 5",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 6,
    code: "006",
    description: "Muffin 6",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 7,
    code: "007",
    description: "Muffin 7",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 8,
    code: "008",
    description: "Muffin 8",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 9,
    code: "009",
    description: "Muffin 9",
    images: [Image],
    price: 2.99,
    type: "Product"
  },
  {
    id: 10,
    code: "010",
    description: "Muffin 10",
    images: [Image],
    price: 2.99,
    type: "Product"
  }
];

const sampleOrders: IOrderHeader[] = [
  {
    id: 1
  }
];
const sampleOrderRows: IOrderRow[] = [
  {
    id: 1,
    orderId: 1,
    productId: 1,
    qty: 6
  },
  {
    id: 2,
    orderId: 1,
    productId: 2,
    qty: 12
  }
];

export const Data: IData = {
  getProduct: (id: number) => {
    let promise = new Promise<IProduct | null>((resolve, reject) => {
      let product: IProduct | null =
        sampleProducts.find((item) => item.id === id) || null;
      if (product !== null) {
        product.orders = sampleOrderRows.filter((row) => row.productId === id);
      }
      resolve(product);
    });
    return promise;
  },
  getProducts: () => {
    let promise = new Promise<IProduct[]>((resolve, reject) => {
      resolve(sampleProducts.filter((item) => item.type === "Product"));
    });
    return promise;
  },
  getTopSellProducts: (top: number) => {
    let promise = new Promise<IProduct[]>((resolve, reject) => {
      let result = sampleProducts
        .filter((item) => item.type === "Product")
        .map((item) => {
          item.orders = sampleOrderRows.filter(
            (row) => row.productId === item.id
          );
          let qtyArrays = item.orders.map((o) => o.qty);
          if (qtyArrays.length > 0) {
            item.sells = qtyArrays.reduce((a, b) => a + b);
          }
          return item;
        })
        .sort((a, b) => {
          if ((a.sells || 0) < (b.sells || 0)) return 1;
          else if ((a.sells || 0) > (b.sells || 0)) return -1;
          else return 0;
        });
      resolve(result.slice(0, top));
    });
    return promise;
  },
  getOrders: () => {
    let promise = new Promise<IOrderHeader[]>((resolve, reject) => {
      resolve(sampleOrders);
    });
    return promise;
  },
  getOrder: (id: number) => {
    let promise = new Promise<IOrderHeader | null>((resolve, reject) => {
      let order: IOrderHeader | null =
        sampleOrders.find((order) => order.id === id) || null;
      if (order !== null) {
        order.rows = sampleOrderRows.filter((row) => row.orderId === id);
      }
      resolve(order);
    });
    return promise;
  }
};
