import { useSelector } from "react-redux";
import { useGetImageListQuery } from "../../features/image/imageSlice";
import { Error } from "../ui/Error";
import Loader from "../ui/Loader";
import Photo from "./Photo";

const Gallery = () => {
  const { data, isLoading, isError, error } = useGetImageListQuery();
  const { search, selectedCategories } = useSelector((state) => state.filter);

  // Decide What to Show
  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error msg={error.status} />;
  else if (!isLoading && !isError)
    content = data
      .filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      )
      .filter(
        (item) =>
          selectedCategories.includes(item.category) ||
          !selectedCategories.length
      )
      .map((item) => <Photo key={item._id} item={item} />);

  return (
    <div className="mt-8 border-t pt-4">
      {/* Gallery Categories */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-4">
        {content}
      </div>
      {!isLoading && !isError && !content.length && (
        <Error msg="Nothing Found" />
      )}
    </div>
  );
};

export default Gallery;
