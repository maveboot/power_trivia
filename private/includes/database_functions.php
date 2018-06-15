<?php

  // Maak verbinding met database
  function db_connect() {
    $connection = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
    confirm_connect($connection);
    return $connection;
  }

  // Controleer verbinding met database
  function confirm_connect($connection) {
    if($connection->connect_errno) { // Als er een error is, maak melding
      $bericht = "Verbinding met database mislukt: ";
      $bericht .= $connection->connect_errno;
      $bericht .= " (" . $connection->connect_errno . ")";
      exit($bericht);
    }
  }

  // Database verbinding sluiten
  function db_disconnect($connection)
  {
    if(isset($connection)) {
      $connection->close();
    }
  }
?>
