let HOST_URL = "https://mmi.unilim.fr/~berkersuzan1/SAE2.03-Berkersuzan/SAE2.03-Berkersuzan1";

let DataProfil = {};

    DataProfil.addProfil = async function (formData) {
        
       let config = {
            method: "POST",
            body: formData
        };
        let response = await fetch(HOST_URL + "/server/script.php?todo=addProfil", config)
        return await response.json();
       
    };

    DataProfil.modifyProfil = async function (formData) {
        let config = {
            method: "POST",
            body: formData
        };
        let response = await fetch(HOST_URL + "/server/script.php?todo=modifyProfil", config)
        return await response.json();
    }

    DataProfil.readProfil = async function () {
        let answer = await fetch(
          HOST_URL + "/server/script.php?todo=readProfil"
        );
        let data = await answer.json();
        return data;
      };

export {DataProfil};