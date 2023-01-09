// import logo from './logo.svg';
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { PageRoutes } from "./config";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid m-0 p-0">
        <Navbar />
        <div>
          <PageRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
