import styled from "styled-components";

export const Card = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #121214;
  height: 2.5rem;
  padding: 10px;
  margin-top: 10px;

  h3 {
    color: white;
    font-family: "inter";
    font-size: 1rem;
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 46%;
    max-width: 200px;
    span {
      color: white;
      font-family: "inter";
      font-size: 0.8rem;
      font-weight: 300;
      opacity: 0.7;
    }
    button {
      display: block;
      background-color: transparent;
      border: none;
      color: white;
      opacity: 0.7;
    }
  }
  @media (min-width: 765px) {
  }
`;
