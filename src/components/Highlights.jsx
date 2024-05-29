import PropTypes from "prop-types";

const Highlights = (props) => {
  return (
    <div className="min-h-[100px]">
      <h3>{props.title}</h3>
    </div>
  );
};

Highlights.propTypes = {
  title: PropTypes.string,
};

export default Highlights;
