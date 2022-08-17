import styled, { keyframes } from "styled-components";

const openModal = keyframes`
from{
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const ModalUpTech = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.5);

  > div {
    width: 95%;
    max-width: 350px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #212529;
    position: fixed;
    z-index: 1;
    padding-bottom: 10px;
    animation: ${openModal} 0.8s;

    header {
      background: #343b41;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px 0px 10px;
      position: relative;
      h2 {
        font-size: 0.8rem;
        color: white;
        font-family: "Inter";
      }
      button {
        color: white;
        background-color: transparent;
        border: none;
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10px;
        gap: 20px;

        label {
          color: white;
          font-family: "Inter";
          font-size: 0.8rem;
        }
        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0px 22.3336px;
          gap: 10.15px;

          width: 91%;
          height: 2rem;

          background: #ff577f;

          border: 1.2182px solid #ff577f;
          border-radius: 4.06066px;
          color: white;
          font-family: "Inter";
          font-weight: 500;
        }
      }
      div {
        width: 90%;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        input {
          width: 100%;
          height: 2rem;
          border-radius: 4px;
          background-color: rgba(52, 59, 65, 1);
          border: 1px solid white;
        }
        select {
          width: 100%;
          height: 2rem;
          border-radius: 4px;
          background-color: rgba(52, 59, 65, 1);
          border: 1px solid white;
          color: white;
        }
      }
    }
  }
`;
