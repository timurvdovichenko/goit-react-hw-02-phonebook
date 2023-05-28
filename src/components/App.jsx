import { Component } from 'react';
import PhoneBook from './PhoneBook/Phonebook';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  render() {
    const normalizedContacts = this.getNormalizedContacts();
    const filteredContacts = this.getFilteredContacts(normalizedContacts);

    return (
      <div>
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
