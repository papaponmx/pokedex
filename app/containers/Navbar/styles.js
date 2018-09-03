import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid tomato;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border-bottom: 1px dotted #999;
`;

export const Suggestions = styled.div`
  top: 22px;
  position: absolute;
`;
