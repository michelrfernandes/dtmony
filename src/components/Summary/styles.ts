import styled from 'styled-components'

export const Container = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 1.5rem ;
  margin-top: -5rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1.5rem;

    &.total{
      background:var(--green);
      color: #ffff;
    }  
    
  header{
    display: flex;
    justify-content: space-between;
  }
  strong {
      font-weight: 500;
      font-size: 2rem;
    }
}
  `