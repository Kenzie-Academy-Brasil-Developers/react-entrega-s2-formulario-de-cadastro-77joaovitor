import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    font-size: 2rem;
    animation-name: rota;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  @keyframes rota {
    0% {
      transform: rotate(0deg);
    }
    80% {
      transform: 280deg;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
