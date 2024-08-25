import logo from "../images/logo.png";
import "../style/Header.css";
export default function Header() {
  return (
    <div>
      <center>
        <img src={logo} alt="" />
        <h1>Inicio</h1>
      </center>
    </div>
  );
}
