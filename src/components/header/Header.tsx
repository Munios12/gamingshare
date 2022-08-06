import { useSelector } from "react-redux";

export const Header = ({ onLogout }: { onLogout(): void }) => {
  const estado = useSelector((state: any) => state.auth);
  console.log(estado);
  return (
    <>
      <header>
        <p>{estado.email}</p>
        <button onClick={onLogout}>Logout</button>
      </header>
      <nav>
        <ul>
          <li>Videogames List</li>
          <li>Wishlist</li>
        </ul>
      </nav>
    </>
  );
};
