import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category) {
  let categoryHtml = template;

  categoryHtml = categoryHtml.replace("{{name}}", category.name);

  const uniqueId = `carousel-${category.name.replace(/\s+/g, "-").toLowerCase()}`;
  categoryHtml = categoryHtml.replaceAll("{{id}}", uniqueId);

  let moviesListHtml = "";
  for (let movie of category.movie) {
    moviesListHtml += Movie.format([movie]);
  }
  categoryHtml = categoryHtml.replace("{{movie}}", moviesListHtml);

  return categoryHtml;
};

export { MovieCategory };