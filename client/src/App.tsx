import { imageResources } from "./assets/imageResources";
import GlobalStyled from "./components/GlobalStyled";
function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <img src={imageResources.Logo} alt="logo" />
      <h1>Huy ne</h1>
    </div>
  );
}

export default App;
