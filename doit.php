<?php require_once 'private/includes/dbcred.php';
      require_once 'private/includes/database_functions.php';

$db = db_connect();

$sql = "SELECT * FROM quiz";
$results = $db->query($sql);

$row = $results->fetch_assoc(); //Associatieve array terug krijgen
$results->free(); //Free de resultaten voor geheugen

echo "<h1>" . $row["question"] . "</h1>";
echo "<a href='#'>" . $row["answer1"] . "</a><br>";
echo "<a href='#'>" . $row["answer2"] . "</a><br>";
echo "<a href='#'>" . $row["answer3"] . "</a><br>";
echo "<br>";
echo "Rigth anwer: <strong>" . $row["right_answer"] . "</strong>";

?>
