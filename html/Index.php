<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/transitional.dtd">
<html lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="Site de jeu de mots">
<meta name="keywords" content="Mots, lettres, Èducation, pÈdagogie, information, communication, jeu, divertissement">

<title>Jeu de mots</title>		
<link rel="stylesheet" href="../css/style.css" type="text/css">


		
</head>	
<body class= "body">

<form method="GET" action="resultat.php">

  	 <fieldset>

       <legend>Identification</legend> <!-- Titre du fieldset --> 
		
			<p>
				<label for="prenom"><Strong>Pr√©nom&nbsp;&nbsp;</Strong> </label>

				<input type="text" name="prenom" Id="prenom" placeholder="Ex : Oumeyma" required autofocus/>

				<label for="nom"><Strong>Nom&nbsp;&nbsp;</Strong> </label>

				<input type="text" name="nom" Id="nom" placeholder="Ex : Srat" required />
			</p>
	
			<p>
				<label for="niveau"> <Strong>Niveau &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Strong></label>
	 
				<input type="radio" name="niveau" Id="facile" value="facile" checked>
				<label for="abonewspromo">Facile</label>
            
				<input type="radio" name="niveau" Id="moyen" value="moyen">
				<label for="moyen">Moyen</label>
           
				<input type="radio" name="niveau" Id="difficile" value="difficile" >
				<label for="difficile">Difficile</label>
        
			</p>
			<p style="text-indent:140px" >
		
				<input type="button" value="Commencer le jeu" class="debutJeu" >
				
				<span Id= "aideDebutPartie" style="color: red" style="font-weight: bold"> </span>
			</p>

 </fieldset>

 

   <fieldset>

       <legend>Lettres</legend> <!-- Titre du fieldset -->
	   
<p Id="avLettres" style="text-indent:30px" >

</p>
<div id="cadre">

    <div id="bloc"></div>

</div>
    <h4 id="titre">Vous avez  <span id="compteur">25</span> seconde(s) pour valider ves propositions</h4>
<center>
       <p Id="lettres" >

          

       </p>

</center>

   </fieldset>
   
   
   
  

    
<fieldset>
        
		
	
				
			<table >

   <tr>
   
		<td width=500px > <label for="proposition" " >
			<Strong>Saisis votre proposition &nbsp;&nbsp;&nbsp;&nbsp;</Strong> </label>

			<input type="text" name="proposition" Id="proposition"  style="text-indent:950px"  disabled="disabled"  />
			<span Id= "controleProposition" class= "controleProsition" > </span>
		</td>
	
        <td width=170px>    <input type="button" class="ajouterMot"  disabled="disabled">
			<span Id= "controleAjout" style="color: red" style="font-weight: bold"> </span>
		</td>
	   
		<td width=400px rowspan="2"> <SELECT multiple = "multiple" name="propositions" Id="propositions" size="6 style="width:200px" required >
    
				</SELECT>

		</td> 

   </tr>

   <tr>
		<td width=500px > </td>
		<td > <input type="button" class="supprimerMot" > </td>

   </tr>

         </table>	
    <p style="text-indent:150px" >
		
		<input type="submit" value="Soumettre vos propositions" class="terminerjeu" >
		<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>		
		<input type="button" value="Vous ne trouvez pas ?" class="aideJeu" Id="aideJeu">		
	</p>
</fieldset>
<p >
<label for="scoreIn" >		 </label>

<input type="text" name="scoreIn" Id="scoreIn" value="0" style="display:none" required />

<p/>


<table Id="dico" style="display:none">

<?php
// Lit une page web dans un tableau.
$lines = file('dictionnaire.txt');

// Affiche toutes les lignes du tableau comme code HTML, avec les num√©ros de ligne
foreach ($lines as $line_num  => $line) {
    echo "<tr><td>".htmlspecialchars($line)."</td></tr>";
}

?>
</table>

</form>


<script src="../js/jeu.js" type="text/javascript"></script>
</body>

</html>	

