import PropTypes from 'prop-types';
import { List, ListItem, Button } from './Phonebook.styled';

const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { name, id, number } = contact;
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={onClick} id={id} buttonListStyle={'margin-left: 10px'}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onClick: PropTypes.func.isRequired,
};
