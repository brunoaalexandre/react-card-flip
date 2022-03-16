import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.42, 0, 0.54, 1.68);

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFrontContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${(props) => props.background};
`;

export const CardBackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${(props) => props.background};
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
