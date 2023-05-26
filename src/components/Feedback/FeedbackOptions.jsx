import PropTypes from 'prop-types';
import Button from './Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return <Button key={option} name={option} onLeaveFeedback={onLeaveFeedback} />;
      })}
    </ul>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
