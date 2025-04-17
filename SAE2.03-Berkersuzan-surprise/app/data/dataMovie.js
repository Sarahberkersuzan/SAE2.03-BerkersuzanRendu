

let HOST_URL = "https://mmi.unilim.fr/~berkersuzan1/SAE2.03-Berkersuzan/SAE2.03-Berkersuzan-surprise";
let DataMovie = {};

 DataMovie.requestMovies = async function(age = 99){
    let answer = await fetch(HOST_URL + `/server/script.php?todo=category&age=${age}`);
    let movies = await answer.json();
    return movies;
}

DataMovie.requestMovieDetails = async function(id){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=detailread&id=" + id );
    let detail = await answer.json();
    return detail;
}

DataMovie.requestMoviesCategory = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=category" );
    let category = await answer.json();
    return category;
}

DataMovie.addFavorite = async function (id_profil, id_movie) {
    let answer = await fetch(HOST_URL + `/server/script.php?todo=addToFavorite&id_profil=`+id_profil `&id_movie`+id_movie );
    let data = await answer.json();
    return data;
}

DataMovie.deleteFavorite = async function (id_profil, id_movie) {
    let answer = await fetch(HOST_URL + `/server/script.php?todo=deleteFavorite&id_profil=`+id_profil `&id_movie`+id_movie );
    let data = await answer.json();
    return data;
}

DataMovie.enAvant = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readEnAvant");
    let detail = await answer.json();
    return detail;
}

export {DataMovie};