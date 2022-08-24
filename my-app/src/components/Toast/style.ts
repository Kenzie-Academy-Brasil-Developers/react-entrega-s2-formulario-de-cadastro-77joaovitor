import { ReactNode } from "react";
import styled from "styled-components";
import { css, keyframes } from "styled-components";
import { IToastMessage } from "../../context/ToastContext";

interface IColor {
  sucess: any;
  error: any;
}

const rightToLeft = keyframes`
0%{
  transform: translateX(120%);
}

95%{
  transform: translateX(-20px);
}
100% {
  transform: translateX(0);
}
`;

const leftToRight = keyframes`
0%{
  transform: translateX(0);
}

100% {
  transform: translateX(320%);
}
`;

const typeColor: any = {
  sucess: css`
    background: #3fe864;
  `,
  error: css`
    background: #ff3838;
  `,
};

type IProps = {
  isLeave: Boolean;
  type: string;
};

export const PopUpSucess = styled.li<IProps>`
  animation: ${({ isLeave }) => (isLeave ? leftToRight : rightToLeft)} 0.8s;

  position: fixed;
  z-index: 1;
  width: 17rem;
  height: 5rem;
  background-color: rgba(52, 59, 65, 1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 4px;
  top: 1rem;
  right: 1rem;

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
    ${({ type }) => typeColor[type!]}
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
    color: ${({ type }) => (type === "sucess" ? "#3fe864" : "#ff3838")};
    font-size: 1.5rem;
  }
`;
