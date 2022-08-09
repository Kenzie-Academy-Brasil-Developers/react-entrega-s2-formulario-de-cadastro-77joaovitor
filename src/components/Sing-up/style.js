import styled from "styled-components";

export const Header = styled.header`
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
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-top: 1rem;

  margin: 0px;
  height: 4rem;
  align-items: center;

  .header__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 23.125rem;
  }
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

export const FormSingUp = styled.main`
  @keyframes opacity {
    from {
      transform: translateY(200px);
      opacity: 0;
    }

    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #212529;
  width: 90%;
  margin: 0 auto;
  max-width: 23.125rem;
  border-radius: 8px;
  max-width: 369px;
  animation-name: opacity;
  animation-duration: 0.5s;

  .form__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;

    h2 {
      color: white;
      font-family: "Inter";
      font-size: 1.2rem;
    }

    span {
      color: white;
      font-family: "Inter";
      color: #868e96;
      font-size: 0.8rem;
    }
  }

  .password-container {
    position: relative;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 10px;
    margin-top: 2rem;
    padding: 1rem;

    width: 100%;

    div {
      position: relative;
      span {
        position: absolute;
        color: red;
        font-family: "Inter";
        font-size: 0.8rem;
        font-weight: 300;
        top: 84px;
        left: 126px;
      }
      input:focus {
        outline-style: none;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      width: 100%;
    }
    input {
      padding: 0px 12.9865px;
      gap: 8.12px;

      width: 100%;
      height: 38.38px;

      /* grey-2 */

      background: #343b41;
      color: white;
      font-size: 1rem;
      /* grey-2 */

      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
    }

    label {
      color: white;
      font-family: "Inter";
      margin-top: 0.5rem;
      font-size: 0.8rem;
      font-weight: 300;
      width: 100%;
    }
    select {
      padding: 0px 12.9865px;
      gap: 8.12px;

      width: 100%;
      height: 38.38px;

      /* grey-2 */

      background: #343b41;
      color: white;
      font-weight: 200;
      font-family: "Inter";
      font-weight: 200;
      /* grey-2 */

      border: 0.973988px solid #343b41;
      border-radius: 3.19812px;
    }

    .showPassword {
      position: absolute;
      color: gray;
      top: 52px;
      right: 1rem;
      font-size: 1.4rem;
      opacity: 0.5;
      cursor: pointer;
    }

    .password-icon {
      display: flex;
      position: relative;
      svg {
        display: inline-block;
        transform: translateY(5px);
        align-items: center;
        gap: 4px;
        font-size: 18px;
      }
      &:hover .password-info {
        display: flex;
      }
    }

    .password-info {
      font-family: "Inter";
      font-size: 0.7rem;
      border: 1px solid black;
      background-color: #343b41;
      color: white;
      padding: 0.2rem;
      border-radius: 4px;
      display: none;
      align-items: center;
      justify-content: center;
      max-width: 90%;
      position: absolute;
      top: -50px;
      left: 80px;
      width: 10rem;
      animation-name: passInfo;
      animation-duration: 0.5s;
    }

    @keyframes passInfo {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    button {
      align-items: center;
      padding: 0px 22.3336px;
      gap: 10.15px;

      width: 100%;
      margin-top: 0.8rem;
      height: 38.38px;

      background: #59323f;
      color: white;

      border: 1.2182px solid #59323f;
      border-radius: 4px;

      font-family: "Inter";
      cursor: pointer;
      &:hover {
        background: #e83f5b;
      }
    }
  }
`;

export const PopUpSucess = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: fixed;
    z-index: 1;
    border: #3fe864;
    width: 17rem;
    height: 5rem;
    background-color: rgba(52, 59, 65, 1);
    display: flex;
    flex-direction: column;
    top: 1rem;
    margin: 0 auto;
    right: 10px;
  }

  .popup__sucess {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    button {
      background-color: rgba(52, 59, 65, 1);
      border: none;
      font-size: 1.3rem;
      color: gray;
      margin-top: -47px;
      margin-right: -6px;
    }
  }

  .borderBot {
    width: 100%;
    background-color: #3fe864;
    height: 0.4rem;
    border-radius: 5px;

    animation-name: animationCheck;

    animation-duration: 3s;
  }

  @keyframes animationCheck {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: white;
  }
  svg {
    color: #3fe864;
    font-size: 1.5rem;
  }
`;

export const PopUpFalse = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: fixed;
    z-index: 1;
    border: #3fe864;
    width: 17rem;
    height: 5rem;
    background-color: rgba(52, 59, 65, 1);
    display: flex;
    flex-direction: column;
    top: 1rem;
    margin: 0 auto;
    right: 10px;
  }

  .popup__sucess {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    button {
      background-color: rgba(52, 59, 65, 1);
      border: none;
      font-size: 1.3rem;
      color: gray;
      margin-top: -47px;
      margin-right: -6px;
    }
  }

  .borderBot {
    width: 100%;
    background-color: #e83f5b;
    height: 0.4rem;
    border-radius: 5px;

    animation-name: animationCheck;

    animation-duration: 3s;
  }

  @keyframes animationCheck {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: white;
    margin-left: -1.5rem;
  }
  svg {
    color: #e83f5b;
    font-size: 1.5rem;
  }
`;
