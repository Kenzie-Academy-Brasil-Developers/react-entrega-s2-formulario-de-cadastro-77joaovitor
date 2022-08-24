import styled from "styled-components";
import { GoDiffAdded } from "react-icons/go";

export const CardUl = styled.div`
  width: 100%;
  height: 100%;
  > span {
    color: white;
    margin: auto;
    display: flex;
    width: 86%;
    margin-top: 1rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    margin: auto;

    h2 {
      color: white;
      font-family: "Inter";
      font-size: 1.2rem;
    }

    button {
      background-color: transparent;
      border: none;
      svg {
        color: white;
        font-size: 1.5rem;
      }
    }
  }
  ul {
    width: 92%;
    background-color: #212529;
    margin: auto;
    padding: 10px 10px 20px 10px;
  }
`;
