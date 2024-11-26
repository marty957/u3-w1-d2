import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Welcome from "./Welcome";
import AllTheBooks from "./AllTheBooks";
function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <AllTheBooks />

      <Footer />
    </>
  );
}

export default App;
