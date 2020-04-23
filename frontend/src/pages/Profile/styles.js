import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 0 15px;
      height: 44px;
      border-radius: 4px;
      border: none;
      margin: 0 0 10px;
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 44px;
      border-radius: 4px;
      border: none;
      background: #3b93ff;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      margin: 5px 0 10px;
      transition: background 0.3s;

      &:hover {
        background-color: ${darken(0.03, '#3b93ff')};
      }
    }

    span {
      color: #ff9bb3;
      margin: -7px 0 10px 5px;
      font-weight: bold;
    }
  }

  hr {
    margin: 10px 0 20px;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  button {
    height: 44px;
    border-radius: 4px;
    border: none;
    background: #f64c75;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background-color: ${darken(0.08, '#f64c75')};
    }
  }
`

export { Container, Content }
