import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li>
        <a href={route.path}>{route.title}</a>
      </li>
    </div>
  );
};

Link.propTypes ={
  route : PropTypes.array.isRequired,
}
export default Link;
