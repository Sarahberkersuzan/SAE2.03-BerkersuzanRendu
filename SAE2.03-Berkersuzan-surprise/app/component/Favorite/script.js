import { Movie } from "../Movie/script.js";

let Favoris = {};

Favoris.format = function (favoris) {
  if (!favoris || favoris.length === 0) {
    return "<p>Aucun films favoris pour le moment</p>";
  }

  return Movie.format(favoris, true);
};

export { Favoris };