let templateFile = await fetch("./component/MovieEnAvant/template.html");
let template = await templateFile.text();

let EnAvant = {};

EnAvant.format = function (movies){
    if (movies.length === 0) {
        return "<p>Aucun film mis à la une pour le moment.</p>";
      }
    
    let html = "";
    for (let movie of movies) {
      let movieHtml = template;
        movieHtml = movieHtml.replace("{{nom}}", movie.name);
        movieHtml = movieHtml.replace("{{affiche}}", movie.image);
        movieHtml = movieHtml.replace("{{description}}", movie.description);
        movieHtml = movieHtml.replace("{{handler}}",`C.handlerDetail(${movie.id})`);
        
        html += movieHtml
    };
    
      return html;   
 };

export {EnAvant};