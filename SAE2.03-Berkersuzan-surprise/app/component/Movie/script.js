let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies, isFavorisPage = false) {
  if (movies.length == 0) {
    return "<p>Aucun film disponible pour le moment.</p>";
  }
  let html = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{nom}}", movie.name);
    movieHtml = movieHtml.replace("{{affiche}}", movie.image);
    movieHtml = movieHtml.replace("{{onclick}}",`C.handlerDetail(${movie.id})`);
    movieHtml = movieHtml.replace("{{onclickFavorite}}",`event.stopPropagation();C.hAddToFavorite(${movie.id})`);
    movieHtml = movieHtml.replace("{{onclickDeleteFavorite}}",`event.stopPropagation();C.hDeleteFavorite(${movie.id})`);
    
    if (isFavorisPage) {
      movieHtml = movieHtml.replace("{{click}}","Supprimer des favoris")
      movieHtml = movieHtml.replace("{{handlerButton}}", `C.deleteFavorite(${movie.id})`);
    } else {
      movieHtml = movieHtml.replace("{{click}}","Ajouter aux favoris")
      movieHtml = movieHtml.replace("{{handlerButton}}", `C.addFavorite(${movie.id})`);
    }

    html += movieHtml
};

  return html;
};


export {Movie};
