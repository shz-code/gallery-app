export const Home = () => {
  return (
    <div className="container mx-auto px-2 py-20">
      <h2 className="text-4xl font-semibold">Browse Gallery Categories</h2>
      {/* Gallery Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {/* Category Item */}
        <div className="category-item">
          <div className="img-box">
            <img src="" alt="" />
            <div className="details">
              <p className="font-semibold text-lg"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
