
let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (movie) {
  let movieHtml = template;
  
  movieHtml = movieHtml.replace("{{affiche}}", movie.image);
  movieHtml = movieHtml.replace("{{name}}", movie.name);
  movieHtml = movieHtml.replace("{{description}}", movie.description);
  movieHtml = movieHtml.replace("{{director}}", movie.director);
  movieHtml = movieHtml.replace("{{year}}", movie.year);
  movieHtml = movieHtml.replace("{{duree}}", movie.length);
  movieHtml = movieHtml.replace("{{category}}", movie.category_name);
  movieHtml = movieHtml.replace("{{age}}", movie.min_age);
  movieHtml = movieHtml.replace("{{trailer}}", movie.trailer);

  return movieHtml;
};

export { MovieDetail };
