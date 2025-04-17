<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");

function readMoviesController(){
    $movies = getAllMovies();
    return $movies;
}

function addController() {
  header('Content-Type: application/json');

  $name = $_REQUEST['name'];
  $year = $_REQUEST['year'];
  $length = $_REQUEST['length'];
  $description = $_REQUEST['description'];
  $director = $_REQUEST['director'];
  $id_category = $_REQUEST['id_category'];
  $image = $_REQUEST['image'];
  $trailer = $_REQUEST['trailer'];
  $min_age = $_REQUEST['min_age'];
  $EnAvant = $_REQUEST['EnAvant'];

  $ok = addMovie($name, $year, $length, $description, $director, $id_category, $image, $trailer, $min_age, $EnAvant);

  if ($ok != 0) {
      echo json_encode(["success" => true, "message" => "Film ajouté à la base de donnée"]);
  } else {
      echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout du film"]);
  }

exit();

}

function detailController() {
 

  $id = $_REQUEST['id'];

  $movie = detailMovie($id);

  if ($movie != null) {
      echo json_encode(["success" => true, "movie" => $movie]);
  } else {
      echo json_encode(["success" => false, "message" => "Erreur lors de la récupération du film"]);
  }
  exit();
}

function categoryController() {
    $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 0;
    $category = getCategory($age);
    return $category ? $category : false;
}

function profilController() {

    // Vérifiez que les paramètres sont définis
    if (!isset($_REQUEST['nom']) || !isset($_REQUEST['avatar']) || !isset($_REQUEST['age'])) {
        echo json_encode(["success" => false, "message" => "Paramètres manquants"]);
        exit();
    }

    $nom = $_REQUEST['nom'];
    $avatar = $_REQUEST['avatar'];
    $age = $_REQUEST['age'];

    // Vérifiez que l'âge est un entier valide
    if ( $age <= 0) {
        echo json_encode(["success" => false, "message" => "Âge invalide"]);
        exit();
    }

    $ok = addProfil($nom, $avatar, $age);

    if ($ok != 0) {
        echo json_encode(["success" => true, "message" => "Profil ajouté à la base de donnée"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de l'ajout du Profil"]);
    }

    exit();
}

function readProfilController() {
    if (!isset($_REQUEST['id'])) {
        $profils = readProfil(); 
      }
      else{
        $id = $_REQUEST['id'];
        $profils = readOneProfil($id);
      }
     
      return $profils;
}

function modifyProfilController() {
    $id = $_REQUEST['id'] ?? null;
    $nom = $_REQUEST['nom'] ?? null;
    $avatar = $_REQUEST['avatar'] ?? null;
    $age = $_REQUEST['age'] ?? null;

    if (empty($id) || empty($nom) || empty($age)) {
        return "Erreur : Tous les champs obligatoires doivent être remplis.";
    }

    $ok = modifyProfil($id, $nom, $avatar, $age);
    return $ok ? "Le profil a été modifié avec succès." : "Erreur lors de la modification du profil.";
}

function addToFavoriteController() {
    $id_movie = $_REQUEST['id_movie'];
    $id_profil = $_REQUEST['id_profil'];

    if (isFavoris($id_movie, $id_profil)) {
        return ["error" => "Le film est déjà dans vos favoris !"];
    }

    $ok = addToFavorite($id_movie, $id_profil);
    return $ok ? "Le film a été ajouté aux favoris." : "Erreur lors de l'ajout aux favoris.";
}

function readFavoriteController() {
    $id_profil = $_REQUEST['id_profil'] ?? null;
    $ok = readFavorite($id_profil);
    return $ok ? $ok : [];
  }

  function deleteFavoriteController() {
    $id_profil = $_REQUEST['id_profil'] ?? null;
    $id_movie = $_REQUEST['id_movie'] ?? null;
    $ok = deleteFavorite($id_movie, $id_profil);
    if ($ok) {
        return ["success" => "Le film à été suprimé des favoris."];
    } else {
        return ["error" => "Impossible de supprimer le film de vos favoris."];
    }
  }


  function enAvantController(){
    $data = enAvant();
    return $data ? $data : [];
  }
