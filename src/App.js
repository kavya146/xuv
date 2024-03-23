import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contenthead from "./components/contenthead/Contenthead";
import Mainhead from "./components/mainhead/Mainhead";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mainhead />
        <Contenthead />
        <Intro />
      </header>
    </div>
  );
}

export default App;
