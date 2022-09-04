const apiKey = "2b36421cd3b64c88a4039c6b6370a353";

const url = `https://api.rawg.io/api/games?key=${apiKey}&metacritic=100&page=1&page_size=5`;

export const getVideogames = () => {
  return fetch(url).then((resp) => resp.json());
};

export const getVideogameByID = (id: any) => {
  const urlByID = `https://api.rawg.io/api/games/${id}?key=${apiKey}`; //ESTA FUNCION SE ESTÁ EJECUTANDO 29 VECES

  return fetch(urlByID).then((resp) => resp.json());
};
