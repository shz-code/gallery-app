import { X } from "lucide-react";

const PhotoModal = ({ setModalOpen, modalPhoto: photo }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="photoModal-container">
      <div className="photoModal">
        <div className="photoModal-header">
          {photo.name}
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
          <h3 className="text-2xl font-semibold py-2 px-4">Comments</h3>
          <div className="photoComments">
            <div className="comment">
              <div className="comment-header text-lg font-mono font-semibold">
                Shanto
              </div>
              <div className="comment-body ps-2">- Nice Content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
