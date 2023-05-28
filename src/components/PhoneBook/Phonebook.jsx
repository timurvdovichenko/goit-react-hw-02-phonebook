import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { H2Styled } from './Phonebook.styled';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const contact = { name: name, id: nanoid(), number: number };
    const normalizedName = this.state.name.toLowerCase();
    const checkedName = this.props.contacts.find(contact => contact.name === normalizedName);

    if (checkedName) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.props.onSubmitForm(contact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  checkCurrentContact = () => {
    this.props.contacts.find(contact => contact.name === contact);
  };

  render() {
    return (
      <div>
        <H2Styled>PhoneBook</H2Styled>
        <ContactForm
          onSubmit={this.handleSubmitForm}
          onChange={this.handleChange}
          name={this.state.name}
          number={this.state.number}
        />
        <H2Styled>Contacts</H2Styled>
        <Filter value={this.props.filter} onChange={this.props.filterHandlerData} />
        <ContactList contacts={this.props.contacts} onClick={this.props.onClickDelete} />
      </div>
    );
  }
}

export default PhoneBook;

PhoneBook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  filter: PropTypes.string.isRequired,
  filterHandlerData: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
