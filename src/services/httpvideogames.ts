const apiKey = "2186708cf518437e9c51b6093876f200";

const url = `https://api.rawg.io/api/games?key=${apiKey}&metacritic=100&page=1&page_size=10`;

export const getVideogames = () => {
  return fetch(url).then((resp) => resp.json());
};
