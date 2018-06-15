<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/quiz.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <title>POWER TRIVIA</title>
</head>
<body>

<!-- Header met POWER logo -->
<?php include_once 'includes/header.php'; ?>

<!-- Progress bar timer -->
<p id="timer">0:10</p>

<!-- Progress bar -->
<section id="progressBar">
  <div id="progress"></div>
</section>

<?php

  // Haal Q&A uit database
  $results = $database->query("SELECT * FROM quiz");
  $row = $results->fetch_assoc();
  $results->free();

?>
<!-- Main content van de pagina -->
<main>
  <img src="images/<?php echo $row['picture_question']; ?>" alt="Power afbeelding">
  <section class="vraag">
    <h1><?php echo $row["question"]; ?></h1>
    <a href="#" id="antwoord1" class="antwoorden"><?php echo $row["answer1"]; ?></a>
    <a href="#" id="antwoord2" class="antwoorden"><?php echo $row["answer2"]; ?></a>
    <a href="#" id="antwoord3" class="antwoorden"><?php echo $row["answer3"]; ?></a>
  </section>
</main>

<!-- Knop om naar volgende vraag te gaan | is standaard uit, pas na JS -->
<a href="#" alt="next knop" id="knop">next</a>
<a href="#" hidden id="verborgen"><?php echo $row["right_answer"]; ?></a>

<!-- Footer -->
<?php include_once 'includes/footer.php'; ?>

<script src="js/progressbar.js" type="text/javascript"></script>
</body>
</html>
