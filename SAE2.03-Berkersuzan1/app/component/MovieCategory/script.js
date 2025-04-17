import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (category) {
  let categoryHtml = template;
  categoryHtml = categoryHtml.replace("{{name}}", category.name);

  let moviesListHtml = Movie.format(category.movie || []);
  categoryHtml = categoryHtml.replace("{{movie}}", moviesListHtml);

  return categoryHtml;
};

export { MovieCategory };