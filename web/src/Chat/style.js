import styled from 'styled-components';

export const Container = styled.main`
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  padding: 50px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
      padding: 10px;
      outline: none;
  }

  div {
      margin: 10px 0;
      padding: 0;

      overflow-y: auto;

      border: 1px solid black;
      flex: 2;
  }

  ul {
      list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;     
    padding: 0 8px;
  }


  button {
    border: none;
    background-color: black;
    color: white;
    margin: 10px 0;
    padding: 15px;
    font-size: 15px;

    cursor: pointer;
  }

  @media(max-width: 765px){
    width: 90%;
  }

  @media(max-width: 426px){
    width: 100%;
    padding: 50px 15px;
  }

`;

export const Item = styled.li`
      margin: 3px 0;
      background-color: black;
      border-radius: 8px;
      color: white;
      padding: 5px 10px;
      max-width: 50%;
      align-self: ${props => props.userId === true ? "flex-end" : "flex-start"};
`
