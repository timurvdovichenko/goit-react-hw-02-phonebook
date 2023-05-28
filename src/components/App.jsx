import PropTypes from 'prop-types';
import { Component } from 'react';
// import Feedback from './Feedback/Feedback';
import Notification from './Feedback/Notification';
import Section from './Feedback/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import PhoneBook from './PhoneBook/Phonebook';

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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onClickChange = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  formSubmitHandler = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };
  filterHandlerData = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  onDeleteContactHandler = data => {
    const idToDelete = data.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== idToDelete;
      }),
    }));
  };

  getNormalizedContacts = () => {
    return this.state.contacts.map(contact => {
      return { id: contact.id, name: contact.name.toLowerCase(), number: contact.number };
    });
  };
  getFilteredContacts = data => {
    const { filter } = this.state;
    return data.filter(contact => {
      return contact.name.includes(filter.toLowerCase());
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.floor(
      100 * (this.state.good / this.countTotalFeedback()),
    );
    return isNaN(positiveFeedbackPercentage) ? 0 : positiveFeedbackPercentage;
  };

  render() {
    const stateObject = Object.keys(this.state);
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    const normalizedContacts = this.getNormalizedContacts();
    const filteredContacts = this.getFilteredContacts(normalizedContacts);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={stateObject} onLeaveFeedback={this.onClickChange} />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={feedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <PhoneBook
          onSubmitForm={this.formSubmitHandler}
          contacts={filteredContacts}
          filter={this.state.filter}
          filterHandlerData={this.filterHandlerData}
          onClickDelete={this.onDeleteContactHandler}
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
