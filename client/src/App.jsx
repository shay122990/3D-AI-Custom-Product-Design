import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
function App() {
  return (
    <main className="app transition-all ease-in">
      <Canvas />
      <Home />
      <Customizer />
    </main>
  );
}

export default App;
