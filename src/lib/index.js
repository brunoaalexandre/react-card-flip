import { CardBackContainer, CardFrontContainer, Container } from "./styles";

function CardContainer(props) {
  return (
    <Container width={props.width} height={props.height}>
      {props.children}
    </Container>
  );
}

function CardFront(props) {
  return (
    <CardFrontContainer background={props.background}>
      {props.children}
    </CardFrontContainer>
  );
}

function CardBack(props) {
  return (
    <CardBackContainer background={props.background}>
      {props.children}
    </CardBackContainer>
  );
}

export { CardContainer, CardFront, CardBack };
