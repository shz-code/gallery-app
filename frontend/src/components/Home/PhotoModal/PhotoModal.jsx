import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { NewComment } from "./NewComment";

const PhotoModal = ({ setModalOpen }) => {
  const { photo } = useSelector((state) => state.modalPhoto);
  const { comments } = photo;
  const { email, name } = useSelector((state) => state.user);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("photoModal-container")) {
      setModalOpen(false);
    }
  };
  return (
    <div className="photoModal-container" onClick={handleClick}>
      <div className="photoModal">
        <div className="photoModal-header">
          <span className="bg-white text-black px-4 py-1 rounded-md font-bold">
            {photo.name}
          </span>
          <span className="cursor-pointer" onClick={closeModal}>
            <X size={30} />
          </span>
        </div>
        <div className="photoModal-body">
          <div className="img-box">
            <img src={photo.url} alt={photo.name} />
          </div>
        </div>
        <div className="photoModal-footer border-t mt-8 pt-4 pb-4">
          <Comments comments={comments} />
          {email ? (
            <NewComment
              name={name}
              id={photo._id}
              setModalOpen={setModalOpen}
            />
          ) : (
            <div className="px-4 mt-4 ">
              <Link
                to="/auth"
                className="font-semibold bg-red-500 rounded-md p-2 block underline"
              >
                Sign in to do comment
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
