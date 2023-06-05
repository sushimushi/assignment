// import { useState } from 'react'
import { GlobalStyle, StyledGlobalWrapper } from "./styles";
import { Home } from "./pages";

function App() {

  return (
    <div className="App">
      <GlobalStyle />

      <StyledGlobalWrapper>
        <Home />
      </StyledGlobalWrapper>
    </div>
  );
}

export default App;
