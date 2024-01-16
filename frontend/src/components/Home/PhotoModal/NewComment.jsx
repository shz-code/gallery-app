import { useState } from "react";
import { useAddCommentMutation } from "../../../features/image/imageApi";
import Button from "../../ui/Button";

export const NewComment = ({ name, id }) => {
  const [comment, setComment] = useState({
    name: name,
    comment: "",
  });
  const [addComment, { isLoading }] = useAddCommentMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment({
      id: id,
      body: comment,
    });
    setComment((prev) => ({ ...prev, comment: "" }));
  };
  return (
    <div className="newComment px-4 mt-4">
      <div className="newComment-header">
        Commenting as <span className="font-bold font-mono">{name}</span>
      </div>
      <div className="newComment-body">
        <form onSubmit={handleSubmit}>
          <textarea
            rows={5}
            className="w-full resize-none border-4 border-blue-500 rounded-md bg-slate-900 mt-2 text-white p-2"
            placeholder="Drop Your Comment (Minimum 5 characters)"
            value={comment.comment}
            onChange={(e) =>
              setComment((prev) => ({ ...prev, comment: e.target.value }))
            }
          ></textarea>
          <Button
            isLoading={isLoading}
            type="submit"
            allowed={comment.comment?.length >= 5}
          />
        </form>
      </div>
    </div>
  );
};
