import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Myskills from "./pages/MySkills";
import Navigator from "./Navbar/Navigator";

function App() {
  return (
    <div className="App">
      <header>
        <Navigator/>
      </header>
      <Header/>
      <AboutMe/>
      <Myskills/>
    </div>
  );
}

export default App;
