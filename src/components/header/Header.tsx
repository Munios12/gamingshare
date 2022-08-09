import { useSelector } from "react-redux";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Header = ({ onLogout }: { onLogout(): void }) => {
  const estado = useSelector((state: any) => state.auth);

  return (
    <>
      <header>
        <p>{estado.email}</p>
        <button onClick={onLogout}>Logout</button>
      </header>
      <nav>
        <ul>
          <Link component={RouterLink} to={"/"}>
            <li>Videogames</li>
          </Link>
          <Link component={RouterLink} to={"/favourites"}>
            <li>My favourites</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
