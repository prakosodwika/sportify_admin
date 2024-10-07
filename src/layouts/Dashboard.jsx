import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Player from "../pages/Player";
import Toolbar from "../components/Toolbar";

const Dashboard = () => {
  return (
    <Router>
      <Navbar/>
      <div className="dashboard">
        <Sidebar/>
        <div className="content p-3">
          {/* <Toolbar/> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/player" element={<Player/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Dashboard