<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/transitional.dtd">
<html lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="Site de jeu de mots">
<meta name="keywords" content="Mots, lettres, éducation, pédagogie, information, communication, jeu, divertissement">

<title>Jeu de mots</title>		
<link rel="stylesheet" href="../css/style.css" type="text/css">


		
</head>	
<body class= "body">
<div class="divResultat" center >
<?php 

try

{

    $bdd = new PDO('mysql:host=localhost;dbname=jeumotdb','root','');

}

catch (Exception $e)

{

        die('Erreur : ' . $e->getMessage());

}


if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['scoreIn']))

{

   

        echo '<br /><br />Bravo ' . $_GET['prenom'] . ' ' . $_GET['nom'] . ' !<br /> Votre score est '. $_GET['scoreIn']. ' !<br />';

  

}

else

{

   echo 'Il faut renseigner un nom, un prénom et un nombre de répétitions !';

}


$req = $bdd->prepare('INSERT INTO `performance` (`ID`, `prenom`, `nom`, `score`) VALUES (NULL, :prenom, :nom, :score)');

$req->execute(array(

     'prenom' => $_GET['prenom'],
	
	'nom' => $_GET['nom'],

    'score' => $_GET['scoreIn'],

       ));

	   $classement = $bdd-> prepare('SELECT DISTINCT COUNT(*) AS score FROM performance WHERE score >= :score');
	  
	  $classement->execute(array(

     'score' => $_GET['scoreIn'],
	   
	    ));
		$data = $classement->fetch();
		
	    echo 'Votre rang est ' . $data[0]  . ' !<br />';
	   
?>
<br />
<p center>
	<a href="Index.php" style="text-decoration:none"> <input type="button" value="REJOUER" class="rejouer" > </a>
	</p>

</div>


</body>

</html>	