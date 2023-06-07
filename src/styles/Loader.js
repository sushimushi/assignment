import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: white;
  opacity: ${({ loading }) => loading ? 1 : 0};
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  width: 16px;
  height: 16px;
  transition: opacity 200ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
  transition-delay: ${({ loading }) => loading ? '200ms' : '0ms'}
`;

export default Loader;