import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 2rem 1rem 10rem;

  button {
    font-size: 1rem;
    color: #ffff;
    background: var(--blue-light);
    border:0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`