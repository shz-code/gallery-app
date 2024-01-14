const Photo = ({ item }) => {
  return (
    <>
      {/* gallery photo */}
      <div className="gallery-photo mb-4">
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
