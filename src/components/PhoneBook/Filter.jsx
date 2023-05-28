import PropTypes from 'prop-types';
import { Input, Form, Label } from './Phonebook.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Form filterForm={'border-style: none; margin-bottom: 0;'}>
      <Label>
        Find contacts by name
        <Input
          type="text"
          title="filter"
          value={value}
          onChange={onChange}
          inputFilter={'margin: 0; margin-top: 10px;'}
        ></Input>
      </Label>
    </Form>
  );
};

export default Filter;

Filter.propTypes = { value: PropTypes.string.isRequired, onChange: PropTypes.func.isRequired };
