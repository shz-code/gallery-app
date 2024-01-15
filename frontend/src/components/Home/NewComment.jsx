import Button from "../ui/Button";

export const NewComment = () => {
  return (
    <div className="newComment px-4 mt-4">
      <div className="newComment-header">
        Commenting as <span>Shanto</span>
      </div>
      <div className="newComment-body">
        <textarea
          rows={5}
          className="w-full resize-none border-4 border-blue-500 rounded-md bg-slate-900 mt-2 text-white p-2"
          placeholder="Drop Your Comment"
        ></textarea>
        <Button />
      </div>
    </div>
  );
};
