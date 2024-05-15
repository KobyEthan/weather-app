import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

export const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  margin: 0px;
  .container {
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
  }
  .searchCircle {
    border: 1px solid grey;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 20px;
      color: grey;
    }
  }

  .weatherContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    > .icon {
      font-size: 9rem;
    }

    > h1 {
      font-size: 3rem;

      font-family: "Bebas Neue", sans-serif;
    }

    > span {
      margin-bottom: 10px;
      font-family: "Inter", sans-serif;
    }

    > h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .infoArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: linear-gradient(
      90deg,
      rgba(243, 255, 253, 1) 0%,
      rgba(253, 255, 232, 1) 100%
    );
    border-radius: 12px;
    padding: 10px;
  }
  .humidity,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .icon {
      font-size: 3rem;
    }
  }

  .icon {
    font-size: 2rem;
    margin-right: 10px;
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
    }
    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
