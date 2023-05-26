import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 0.5em;
  padding: 0.25em 1em;
  text-transform: capitalize;
`;

export const ListStyled = styled.ul`
  display: flex;
  margin-left: 30px;
  flex-direction: ${props => props.column};
`;
export const ListItemStyled = styled.li`
  list-style: none;
`;
export const H2Styled = styled.h2`
  display: block;
  margin: 30px;
  font-size: 24px;
`;
export const PararagraphStyled = styled.p`
  display: inline-block;
  margin: 15px 15px 15px 30px;
  font-size: 16px;
`;
