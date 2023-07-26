import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import Myskills from "./pages/MySkills";
import Navigator from "./Navbar/Navigator";
import MyProject from "./pages/MyProject";

function App() {
  return (
    <div className="App">
      <header>
        <Navigator/>
      </header>
      <Header/>
      <AboutMe/>
      <Myskills/>
      <MyProject/>
    </div>
  );
}

export default App;
