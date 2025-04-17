let HOST_URL = "https://mmi.unilim.fr/~berkersuzan1/SAE2.03-Berkersuzan/SAE2.03-Berkersuzan-surprise";

let DataMovie = {};


DataMovie.addMovie= async function (fdata) {
    let config = {
        method: "POST", 
        body: fdata 
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
    let data = await answer.json(); 
    return data; 
}


export {DataMovie};

