import { Slider, ProductsBox } from "../components";

export const Home = (props: any) => {
  return (
    <div>
      <Slider
        items={[
          "https://picsum.photos/seed/cake/1920/1080",
          "https://picsum.photos/seed/muffin/1920/1080",
          "https://picsum.photos/seed/cupcake/1920/1080"
        ]}
      />
      <ProductsBox />
    </div>
  );
};
