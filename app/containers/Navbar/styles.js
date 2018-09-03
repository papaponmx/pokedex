import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const NavbarWrapper = styled.div`
  background-image: linear-gradient(to bottom, rgb(237,83,77) 100%, rgb(51,51,51) 48%, rgb(51,51,51) 52%, rgb(255,255,255) 52%, rgb(255,255,255) 100%);
  border-radius: 0 0 15px 15px;
  box-shadow: 0 2px #555;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border-bottom: 1px dotted #999;
  padding-left: 10px;
`;

export const Suggestions = styled.div`
  box-shadow: 1px 1px 0.5px 0px rgba(0, 0, 0, 0.75);
  top: 22px;
  position: absolute;
  background-color: white;
  width: 100%;
  padding-left: 10px;
`;
