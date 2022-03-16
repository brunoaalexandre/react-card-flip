import { CardBack, CardContainer, CardFront } from "./lib";

function App() {
  return (
    <CardContainer width="130px" height="160px">
      <CardFront background="#000">
        <h1>Front</h1>
      </CardFront>
      <CardBack background="#f00">
        <h1>Back</h1>
      </CardBack>
    </CardContainer>
  );
}

export default App;
