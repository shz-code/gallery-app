import { useGetImageListQuery } from "../../features/image/imageSlice";
import { Error } from "../ui/Error";
import Loader from "../ui/Loader";
import Photo from "./Photo";

const Gallery = () => {
  const { data, isLoading, isError, error } = useGetImageListQuery();
  // Decide What to Show
  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error msg={error.status} />;
  else if (!isLoading && !isError)
    content = data.map((item) => <Photo key={item._id} item={item} />);

  return (
    <div className="mt-8 border-t pt-4">
      {/* Gallery Categories */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-4">
        {content}
      </div>
      {!isLoading && !isError && !content.length && (
        <Error msg="Nothing Found" />
      )}
    </div>
  );
};

export default Gallery;
