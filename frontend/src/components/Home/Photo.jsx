import { useDispatch } from "react-redux";
import { addModalPhoto } from "../../features/modalPhoto/modalPhotoSlice";

const Photo = ({ item, setModalOpen }) => {
  const dispatch = useDispatch();
  const setModal = () => {
    setModalOpen(true);
    dispatch(addModalPhoto(item));
  };
  return (
    <>
      {/* gallery photo */}
      <div className="gallery-photo mb-4" onClick={setModal}>
        <div className="img-box">
          <img src={item.url} alt={item.name} />
          <div className="gallery-photo-details">
            <div className="gallery-photo-details-header">
              <span className="photo-category">{item.category}</span>
            </div>
            <div className="gallery-photo-details-footer">
              <p className="font-semibold text-lg">{item.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
