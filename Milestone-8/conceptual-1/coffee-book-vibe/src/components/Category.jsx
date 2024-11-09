import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({categorys}) => {
  console.log(categorys)
  return (
    <div role="tablist" className="tabs tabs-lifted py-10">
      {categorys.map((category) => (
        <NavLink key={category.category} to={`/category/${category.category}`} role="tab" className={( { isActive }) => `tab text-xl font-thin ${isActive ? 'tab-active' : ''}`}>
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Category.propTypes = {
  categorys: PropTypes.array.isRequired,

}
export default Category;