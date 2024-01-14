import { Categories } from "./Categories";
import Gallery from "./Gallery";

export const Home = () => {
  return (
    <div className="container mx-auto px-2 py-20">
      <Categories />
      <Gallery />
    </div>
  );
};
