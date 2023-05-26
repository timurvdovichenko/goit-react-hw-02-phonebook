import PropTypes from 'prop-types';
import Button from './Button';
import { ListStyled } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListStyled>
      {options.map(option => {
        if (option === 'good' || option === 'bad' || option === 'neutral') {
          return <Button key={option} name={option} onLeaveFeedback={onLeaveFeedback} />;
        } else return undefined;
      })}
    </ListStyled>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
