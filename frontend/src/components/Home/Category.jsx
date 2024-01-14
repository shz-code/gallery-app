const Category = ({ item }) => {
  return (
    <>
      {/* Category Item */}
      <div className="category-item">
        <div className="img-box">
          <img src={item.url} alt={item.name} />
          <div className="details">
            <p className="font-semibold text-lg">{item.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
