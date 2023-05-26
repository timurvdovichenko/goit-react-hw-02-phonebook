import PropTypes from 'prop-types';
import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Notification from './Feedback/Notification';

class App extends Component {
  static defaultProps = {
    goodInitialValue: 0,
    neutralInitialValue: 0,
    badInitialValue: 0,
  };

  state = {
    good: this.props.goodInitialValue,
    neutral: this.props.neutralInitialValue,
    bad: this.props.badInitialValue,
  };
  onClickChange = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor(100 * (this.state.good / this.countTotalFeedback()));
  }

  render() {
    const stateObject = Object.keys(this.state);
    const checkedCountPercentage = isNaN(this.countPositiveFeedbackPercentage())
      ? 0
      : this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();
    return (
      <div>
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onClickChange={this.onClickChange}
          total={totalFeedback}
          percentagePositive={checkedCountPercentage}
          stateObject={stateObject}
        />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  goodInitialValue: PropTypes.number.isRequired,
  neutralInitialValue: PropTypes.number.isRequired,
  badInitialValue: PropTypes.number.isRequired,
};
