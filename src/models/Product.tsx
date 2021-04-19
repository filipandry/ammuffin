interface IProduct {
  id: number;
  code: string;
  images: Array<string | "*.png">;
  description: string;
  price: number;
}

export { IProduct };
