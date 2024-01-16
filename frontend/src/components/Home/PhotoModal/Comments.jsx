import Error from "../../ui/Error";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <>
      <h3 className="text-2xl font-semibold py-2 px-4">Comments</h3>
      <div className="photoComments">
        {comments.length ? (
          comments.map((item, index) => <Comment key={index} comment={item} />)
        ) : (
          <Error msg="No Comments" />
        )}
      </div>
    </>
  );
};

export default Comments;
