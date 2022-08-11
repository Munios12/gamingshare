import { useSelector } from "react-redux";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./header.css";

export const Header = ({ onLogout }: { onLogout(): void }) => {
  const estado = useSelector((state: any) => state.auth);

  return (
    <>
      <header className="header">
        <div className="header__logindata">
          <img src="pf_logo.png" className="logo" alt="logo" />
          <p className="logindata__name">{estado.email}</p>
          <button onClick={onLogout} className="logindata__loginbtn">
            Logout
          </button>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <Link component={RouterLink} to={"/"} className="alperote">
              <li className="item">Videogames</li>
            </Link>
            <Link component={RouterLink} to={"/favourites"}>
              <li className="item">My favourites</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
