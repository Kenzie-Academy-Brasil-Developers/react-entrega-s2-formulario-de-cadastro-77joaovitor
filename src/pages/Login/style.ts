import styled from "styled-components";

export const LoginHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;

  padding-top: 2rem;

  h1 {
    margin: 0;
    color: rgba(255, 87, 127, 1);
    font-family: "Inter";
    font-size: 1.5rem;
  }
`;

export const LoginMain = styled.main`
  @keyframes opa {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  animation-name: opa;
  animation-duration: 0.5s;

  .container__login {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    gap: 10px;
    background-color: rgba(33, 37, 41, 1);
    height: 70%;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    height: 27rem;
    max-width: 369px;
    padding: 0.5rem;
    padding-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    gap: 10px;
    background-color: rgba(33, 37, 41, 1);
    height: 80%;
    justify-content: center;
    align-items: center;

    span {
      color: white;
      font-family: "Inter";
      font-weight: 600;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      justify-content: center;
      width: 93%;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      label {
        margin-left: 2px;
        width: 100%;
        color: #f8f9fa;
        font-family: "Inter";
        font-weight: 300;
        font-size: 0.8rem;
      }
      svg {
        position: absolute;
        top: 42px;
        right: 1rem;
        color: white;
        opacity: 0.7;
        font-size: 1rem;
      }
    }
    input {
      width: 100%;
      height: 38.5px;
      padding-left: 1rem;

      background: #343b41;
      color: white;
      font-family: "Inter";
      font-size: 0.8rem;

      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
    }
  }

  span {
    color: white;
    font-family: "Inter";
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background: #ff577f;
    /* background: rgba(134, 142, 150, 1); */
    border: none;
    width: 94%;
    border-radius: 4px;
    height: 2.4rem;
    margin-top: 0.8rem;
    color: white;
    font-family: "Inter";
    font-weight: 500;
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }

  .container__sinUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-top: 0;
    span {
      font-size: 0.8rem;
      font-family: "Inter";
      font-weight: 200;
      opacity: 0.7;
    }
    button {
      background-color: rgba(134, 142, 150, 1);
      cursor: pointer;
      &:hover {
        background-color: #ff577f;
        opacity: 1;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
