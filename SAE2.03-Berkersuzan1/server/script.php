<?php

require("controller.php");

if ( isset($_REQUEST['todo']) ){

  header('Content-Type: application/json');

  $todo = $_REQUEST['todo'];

  switch($todo){

    case 'readEnAvant':
      $data = enAvantController();
      break;

    case 'deleteFavorite':
      $data = deleteFavoriteController();
      break;

    case 'readFavorite' :
      $data = readFavoriteController();
      break;

    case 'addToFavorite' : 
      $data =  addToFavoriteController();
      break;

    case 'modifyProfil' : 
      $data =  modifyProfilController();
      break;

    case 'readProfil' : 
      $data =  readProfilController();
      break;
      
    case 'addProfil' : 
      $data =  profilController();
      break;

    case 'category' : 
      $data =  categoryController();
      break;

    case 'detailread': 
      $data = detailController(); 
      break;

    case 'addMovie':
      $data = addController(); 
      break;

    case 'readmovies': 
      $data = readMoviesController(); 
      break;

    default: 
      echo json_encode('[error] Unknown todo value');
      http_response_code(400); 
      exit();
  }

  if ($data===false){
    echo json_encode('[error] Controller returns false');
    http_response_code(500); 
    exit();
  }

  echo json_encode($data);
  http_response_code(200); 
  exit();


} 

http_response_code(404);



?>