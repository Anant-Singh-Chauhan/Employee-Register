import { Route } from "react-router-dom/cjs/react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <div className="d-flex flex-column" style={{height: "100vh"}}>
        <Navbar />
        <div className="d-flex flex-row p-4 mx-auto my-auto flex-wrap border border-success rounded" style={{flex : "1"}}>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/aboutus'>
            <AboutUs/>
          </Route>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
