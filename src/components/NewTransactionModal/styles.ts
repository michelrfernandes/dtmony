import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--border-d7);
    background: var(--background-2);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body)
    }

    & + input {
      margin-top: 1rem;
    }  
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    border-radius:  0.25rem;
    font-size: 1rem;
    font-weight: 500;
    border:0;
    color: var(--shape);
    margin-top: 1rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9) 
    }
  }
`
export const TransactionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;  
`
   
interface RadioBox {
  isActive : boolean;
  activeColor: 'green' | 'red';
}
const colors ={
  green: '#33cc95',
    red: '#E52E4D'
}
export const RadioBox = styled.button<RadioBox>`
    background: ${props => props.isActive 
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'
    };
    display: flex;
    height: 4rem;
    justify-content: center;
    align-items: center;
    color: var(--text-body);
    border: 1px solid var(--border-d7);
    transition: border-color 0.2s;
    margin-top: 1rem;
    border-radius: 0.25rem;

    &:hover {
      border-color: ${darken(0.08, '#d7d7d7')};
    }

    img {
      width: 25px;
      height: 25px;
      display: inline-block;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)
    }

`