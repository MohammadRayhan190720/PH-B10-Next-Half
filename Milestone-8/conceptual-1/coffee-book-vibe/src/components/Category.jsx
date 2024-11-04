import { NavLink } from "react-router-dom";

const Category = ({categorys}) => {
  console.log(categorys)
  return (
    <div role="tablist" className="tabs tabs-lifted mt-10 mb-10">
      {categorys.map((category) => (
        <NavLink key={category.category} to={`/category/${category.category}`} role="tab" className="tab">
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;