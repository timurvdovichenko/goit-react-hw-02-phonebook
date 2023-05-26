import PropTypes from 'prop-types';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const Feedback = ({
  onClickChange,
  good,
  neutral,
  bad,
  total,
  percentagePositive = 0,
  stateObject,
}) => {
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateObject} onLeaveFeedback={onClickChange} />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentagePositive}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Feedback;
