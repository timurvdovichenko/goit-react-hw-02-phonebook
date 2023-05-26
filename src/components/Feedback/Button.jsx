import PropTypes from 'prop-types';
const Button = ({ name, onLeaveFeedback }) => {
  return (
    <li>
      <button type="button" name={name} onClick={onLeaveFeedback}>
        {name}
      </button>
    </li>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
