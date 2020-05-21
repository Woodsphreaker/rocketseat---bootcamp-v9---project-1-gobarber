import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 0 10px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px 0;

    span {
      color: #fff;
      margin: 0 30px;
      font-size: 25px;
      font-weight: bold;
    }

    button {
      border: none;
      background: transparent;
      height: 50px;
    }
  }
`
export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`

export const Card = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: ${(props) => (props.past ? 'rgba(255,255,255,0.5)' : '#fff')};
  transition: border 0.2s;
  cursor: ${(props) => (props.past ? 'default' : 'pointer')};
  :hover {
    box-shadow: 0 0 2px 4px rgba(113, 89, 163, 0.8);
  }

  strong {
    display: block;
    font-size: 20px;
    margin: 5px 0;
    color: ${(props) => (props.available ? '#999' : '#7159c1')};
  }

  span {
    font-size: 16px;
    color: ${(props) => (props.available ? '#999' : '#5a5a5a')};
  }
`
