const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header text-lg font-mono font-semibold">
        {comment.name}
      </div>
      <div className="comment-body ps-2">- {comment.comment}</div>
    </div>
  );
};

export default Comment;
