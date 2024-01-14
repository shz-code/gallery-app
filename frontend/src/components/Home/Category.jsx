import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, removeCategory } from "../../features/filter/filterSlice";

const Category = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setSelected(!selected);

    if (selected) {
      dispatch(removeCategory(item.slug));
    } else {
      dispatch(addCategory(item.slug));
    }
  };
  return (
    <>
      {/* Category Item */}
      <div className="category-item" onClick={handleClick}>
        <div className="img-box">
          <img src={item.url} alt={item.name} />
          <div className={`details ${selected && "active"}`}>
            <p className="font-semibold text-lg">{item.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
