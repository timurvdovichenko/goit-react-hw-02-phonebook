import styled from 'styled-components';

export const H2Styled = styled.h2`
  display: block;
  margin: 30px;
  font-size: 24px;
`;
export const Form = styled.form`
  display: block;
  margin: 30px;
  padding: 15px;
  width: 300px;
  border: 2px solid black;
  ${props => props.filterForm}
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-bottom: 25px;
  width: 150px;
  ${props => props.inputFilter}
`;
export const Span = styled.span`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  padding: 0.25em 1em;
  text-transform: capitalize;
  ${props => props.buttonListStyle};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 15px;
  margin-top: 0;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  padding: 3px;
`;
