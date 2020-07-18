import styled from 'styled-components';

export const Container = styled.main`
  width: 60%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
      padding: 10px;
      outline: none;
  }

  div {
      margin: 10px 0;
      height: 300px;
      max-height: 300px;
      padding: 0;

      overflow-y: auto;

      border: 1px solid black;
  }

  ul {
      list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;     
    padding: 0 8px;
  }

  li + li {
      margin-top: 3px;
  }


  button {
    border: none;
    background-color: blue;
    color: white;
    margin: 10px 0;
    padding: 15px;
    font-size: 15px;

    cursor: pointer;
  }

`;
