const apiKey = "2186708cf518437e9c51b6093876f200";

const url = `https://api.rawg.io/api/games?key=${apiKey}&metacritic=100&page=1&page_size=5`;

export const getVideogames = () => {
  return fetch(url).then((resp) => resp.json());
};

export const getVideogameByID = (id: any) => {
  const urlByID = `https://api.rawg.io/api/games/${id}?key=${apiKey}`; //ESTA FUNCION SE ESTÁ EJECUTANDO 29 VECES

  return fetch(urlByID).then((resp) => resp.json());
};
