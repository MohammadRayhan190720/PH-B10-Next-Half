import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-red-400 px-5 py-3 text-white">
        <a href={route.path}>{route.title}</a>
      </li>
    </div>
  );
};

Link.propTypes ={
  route : PropTypes.array.isRequired,
}
export default Link;
