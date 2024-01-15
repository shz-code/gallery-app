import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import { useGetCategoryQuery } from "../../features/category/categoryApi";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import Category from "./Category";

export const Categories = () => {
  const { data, isLoading, isError, error } = useGetCategoryQuery();
  // Decide What to Show
  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error msg={error.status} />;
  else if (!isLoading && !isError)
    content = data.map((item) => <Category key={item._id} item={item} />);
  const options = {
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="sm:flex items-end gap-4">
        <h2 className="text-2xl sm:text-4xl font-semibold ">
          Browse Gallery Categories{" "}
        </h2>
        <span className="text-xs sm:text-sm">slide for more</span>
      </div>
      {/* Gallery Categories */}
      {content.length && (
        <OwlCarousel className="mt-4" margin={10} {...options}>
          {content}
        </OwlCarousel>
      )}
      {isLoading && content}
      {!isLoading && !isError && !content.length && (
        <Error msg="Nothing Found" />
      )}
    </>
  );
};
