import styled from "styled-components";

export const Header = styled.div`
  @keyframes left {
    from {
      transform: translateX(-200px);
    }

    to {
      transform: translateX(0px);
    }
  }

  @keyframes right {
    from {
      transform: translateX(200px);
    }

    to {
      transform: translateX(0px);
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-top: 1rem;

  margin: 0px;
  height: 4rem;
  align-items: center;
  h1 {
    margin: 0;
    color: rgba(255, 87, 127, 1);
    font-family: "Inter";
    font-size: 1.2rem;
    animation-name: left;
    animation-duration: 0.5s;
  }

  button {
    cursor: pointer;
    background-color: #212529;
    border: none;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    width: 5rem;
    height: 2rem;
    border-radius: 4px;
    animation-name: right;
    animation-duration: 0.8s;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export const Main = styled.main`
  @keyframes lefth1 {
    from {
      transform: translatey(-50px);
    }
    to {
      transform: translatey(0px);
    }
  }
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  margin-top: 3rem;

  .user__info {
    width: 100%;
    height: 7rem;
    border: 1px solid rgba(33, 37, 41, 1);
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    h1 {
      color: white;
      font-family: "Inter";
      font-size: 1.2rem;
      animation-name: lefth1;
      animation-duration: 0.5s;
    }
    span {
      color: white;
      font-family: "Inter";
      font-size: 0.8rem;
      font-weight: 300;
    }
  }

  @media (min-width: 400px) {
    .user__info {
      justify-content: space-between;
      flex-direction: unset;
      align-items: center;
    }
  }
`;
