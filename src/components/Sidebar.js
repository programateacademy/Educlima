import {
  // FaRegClock,
  FaRegCheckSquare,
  FaCloudSun,
  FaSmog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container" >
        <img className="logo" src={logo} alt="logo" />
      </div>
      <span className="menu">MENU</span>
      <ul>
        {/* <li>
          <Link className="active" to="/">
            <FaRegClock />
            <span>Historicos</span>
          </Link>
        </li> */}

        <li>
          <Link className="active" to="/actuales">
            <FaRegCheckSquare />
            <span>Actuales</span>
          </Link>
        </li>

        <li>
          <Link className="active" to="/weather">
            <FaCloudSun />
            <span>Pronósticos</span>
          </Link>
        </li>

        <li>
          <Link className="active" to="/polucion">
            <FaSmog />
            <span>Polución</span>
          </Link>
        </li>
      </ul>
      <div className="footer-container">
        <span>2023 © Educamas. | Versión 1.0</span>
      </div>
    </div>
  );
};

export default Sidebar;
