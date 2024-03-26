import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contenthead from "./components/contenthead/Contenthead";
import Mainhead from "./components/mainhead/Mainhead";
import Intro from "./components/intro/Intro";
import Features from "./components/features/Features";
import Pricing from "./components/pricings/pricing";
import Press from "./components/pressrelease/PressRelease";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mainhead />
        <Contenthead />
        <Intro />
        <Features />
        <Pricing />
        <Press />
      </header>
    </div>
  );
}

export default App;
