import logo from "../assets/img/logo.png";
import Restaurant from "./Restaurant";

const Header = ({ data }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <img src={logo} alt="logo-deliveroo" />
        </div>
      </div>

      <Restaurant data={data} />
    </header>
  );
};

export default Header;
