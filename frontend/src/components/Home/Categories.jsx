import { useGetCategoryQuery } from "../../features/category/categorySlice";
import { Error } from "../ui/Error";
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

  return (
    <>
      <h2 className="text-4xl font-semibold">Browse Gallery Categories</h2>
      {/* Gallery Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {content}
      </div>
      {!isLoading && !isError && !content.length && (
        <Error msg="Nothing Found" />
      )}
    </>
  );
};
