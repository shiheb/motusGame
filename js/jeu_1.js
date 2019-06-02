
function ChaineAleatoire(nombreLettre,nbrConsonne,nbrVoyelle)
{
	var listeLettre = new Array("a","e","i","o","u","y","b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z");
	var listeVoyelle = new Array("a","e","i","o","u","y");
	var listeConsonne = new Array("b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z");
	var chaine ='';
	var myString = 'aeiouy';
	
	chaine = chaine + listeLettre[Math.floor(Math.random()*listeLettre.length)];
	
	if (myString.indexOf(chaine) > -1 )
	{
		nbrVoyelle -= 1 ;
	} 
	else {
			nbrConsonne -= 1 ;
		 }
	for(i = 0; i < nbrConsonne ; i++)
	{
		chaine = chaine + listeConsonne[Math.floor(Math.random()*listeConsonne.length)];
	}
	for(i = 0; i < nbrVoyelle; i++)
	{
		chaine = chaine + listeVoyelle[Math.floor(Math.random()*listeVoyelle.length)];
	}
	var res = chaine.toUpperCase(); 
	
	return res;
}
	

var form = document.querySelector("form");
 
var nombreLettre = 0;
var nbrConsonne = 0 ; 
var nbrVoyelle = 0 ; 
var nbrAide=0;

var boutonElt = (document.getElementsByTagName("input"))[5];

var score = 0;


 boutonElt.addEventListener("click", function (){

 var compteurElt = document.getElementById("compteur");


// Diminue le compteur jusqu'à 0

function diminuerCompteur() {

    // Conversion en nombre du texte du compteur

    var compteur = Number(compteurElt.textContent);

    if (compteur > 1) {

        compteurElt.textContent = compteur - 1;

    } else {

        // Annule l'exécution répétée

        clearInterval(intervalId);

        // Modifie le titre de la page

        var titre = document.getElementById("titre");

        titre.textContent = "Temps écoulé !";
		
		//form.reset();
		//location.reload(); 
		//location.assign("Index.php");

    }

}


// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)

var intervalId = setInterval(diminuerCompteur, 1000);





var cadre = document.getElementById("cadre");

var bloc = document.getElementById("bloc");

var vitesse = 1; // Valeur du déplacement en pixels

// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")

var largeurBloc = parseFloat(getComputedStyle(bloc).width);

var animationId = null; // Identifiant de l'animation


// Déplace le bloc sur sa gauche jusqu'au bord du cadre

function deplacerBloc() {

    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")

    var xBloc = parseFloat(getComputedStyle(bloc).left);

    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")

    var xMax = parseFloat(getComputedStyle(cadre).width);

    if (xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre

        // Déplacement du bloc

        bloc.style.left = (xBloc + vitesse) + "px";

        // Demande au navigateur d'appeler deplacerBloc dès que possible

        animationId = requestAnimationFrame(deplacerBloc);

    } else {

        // Annulation de l'animation

        cancelAnimationFrame(animationId);

    }

}


animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation  
    var nom = form.elements.nom.value;

    var prenom = form.elements.prenom.value;
	var validiteNomPrenom = "";
	document.getElementById("proposition").disabled = false;
    if ((nom.length < 1 ) ||  (nom.length < 1 )){
		
		validiteNomPrenom = "Entrez s'il vous votre pr\351nom et votre nom ! "
		
		document.getElementById("aideDebutPartie").textContent = validiteNomPrenom ;
	}
	else {
document.getElementById("lettres").innerHTML = "";
document.getElementById("avLettres").innerHTML = "";
form.elements.proposition.value= "";
document.getElementById("propositions").innerHTML = "";
    
	


   if (form.elements.niveau.value === "facile")
	   
	{
        console.log("vous avez choisi le niveau facile");
		nombreLettre = 10 ;
		do {
		 nbrConsonne = Math.floor(Math.random()*nombreLettre); 
		 nbrVoyelle = nombreLettre - nbrConsonne ; 
		}
		while (( nbrConsonne > nbrVoyelle)||(nbrConsonne <= 2));
		 
	}
       else if (form.elements.niveau.value === "moyen")
	{
        console.log("vous avez choisi le niveau moyen");
		nombreLettre = 8 ;
		do {
		 nbrConsonne = Math.floor(Math.random()*nombreLettre); 
		 nbrVoyelle = nombreLettre - nbrConsonne ; 
		}
		while (( nbrConsonne < nbrVoyelle)|| (nbrVoyelle <= 2));
		
	}
        else
	{
        console.log("vous avez choisi le niveau difficile");
		nombreLettre = 8 ;
		 nbrConsonne = 6 ; 
		 nbrVoyelle = 2 ; 
			
	}	
	
	var chaines = ChaineAleatoire(nombreLettre,nbrConsonne,nbrVoyelle);
	
   
	 var test = document.getElementById("lettres");
	 
	 var avLettres = document.getElementById("avLettres"); // atteindre le paragraphe identifié par avLettres
	 
    var	btElt2 = document.createElement("p");

    btElt2.textContent= "Allez " + prenom.toUpperCase() + "  " + nom.toUpperCase() + " !  " ;
    btElt2.setAttribute("class","bienvenue");
	  avLettres.appendChild(btElt2);
	  
	    var	btElt3 = document.createElement("p");

    btElt3.textContent= "Vous avez choisi le niveau " + form.elements.niveau.value + " ." ;
    btElt3.setAttribute("class","bienvenue");
	  avLettres.appendChild(btElt3);
	
  for (var i=0; i < chaines.length ; i++){
		
	
		var	btElt1 = document.createElement("input");
        btElt1.setAttribute("Id","name_input"+i);
        btElt1.setAttribute("value",chaines[i]);
        btElt1.setAttribute("type","button");
		btElt1.setAttribute("class","styleLettre");
		test.appendChild(btElt1);
	test.insertAdjacentHTML("beforeend", 

 '<i>&nbsp;&nbsp;&nbsp;</i>');
	};
	  // e.preventDefault(); // Annulation de l'envoi des données 
	}
});




document.getElementById("proposition").addEventListener("input", function (e) {
	
	(document.getElementsByTagName("input"))[15].disabled = false;
	(document.getElementsByTagName("input"))[17].disabled = false;
	
	var msgAide = "";
	var testElt= document.getElementById("name_input0");
	var	val = testElt.value;
	var motpropose = e.target.value; // Valeur saisie dans le champ mdp
	var aideMdpElt = document.getElementById("controleProposition");
	if (motpropose.length > 10){
		msgAide = "Mot propos\351 trop longue !";
		
		 aideMdpElt.textContent = msgAide; // Texte de l'aide

		
	}
	
else if ((!(motpropose.length===0))&&(!(motpropose[0].toUpperCase() === val) ))
{
	
    msgAide = "La premi\350re lettre du mot propos\351 doit \352tre la premi\350re des lettres g\351n\351r\351s ";


    aideMdpElt.textContent = msgAide; // Texte de l'aide

   

    } else if ((motpropose.length===0)||(motpropose[0].toUpperCase() === val))
	{
		msgAide = "";
		
	aideMdpElt.textContent = msgAide; // Texte de l'aide

	}
	 


    
	

});




var boutonEltAjout = (document.getElementsByTagName("input"))[7];
 boutonEltAjout.addEventListener("click", function (){
	 
	 
var lettreElt= document.getElementById("name_input0");

    var proposition = form.elements.proposition.value;
	var boutonEltAjout = (document.getElementsByTagName("select"))[0];
	var trouve = 0 ; 
	
	for (var i=0 ; i < form.elements.propositions.length; i++){
		
	
		var result =( form.elements.propositions.options[i].value.toUpperCase()== proposition.toUpperCase());
	
		if (result == true ) {
			alert("Proposition déjà saisie !");
			trouve = 1;
		}
	
	}
	
	
	
	if ((!(proposition.length === 0))&& (proposition.length <= 10)&&(lettreElt.value === proposition[0].toUpperCase())&& (trouve === 0)){
	var	btElt4 = document.createElement("option");
	 trouve = 0;
        btElt4.setAttribute("value",proposition);
		btElt4.setAttribute("class","styleMot");
		btElt4.textContent = proposition;
		boutonEltAjout.appendChild(btElt4);
		
	boutonEltAjout.insertAdjacentHTML("beforeend", '<br>');
	}

});

 

var boutonEltSupp = (document.getElementsByTagName("input"))[8];

boutonEltSupp .addEventListener("click", function (){
	
	  var propositionSel = form.elements.propositions;

   propositionSel.removeChild(propositionSel.options[propositionSel.selectedIndex]);
   
   
})



document.getElementById("aideJeu").addEventListener("click", function (e) {
	
	nbrAide ++;
	
	var listeVoyelle = new Array("a","e","i","o","u","y");
	
	var voyelleAleatoire = listeVoyelle[Math.floor(Math.random()*listeVoyelle.length)].toUpperCase();
	
	var positionAleatoire = 0;
	if (form.elements.niveau.value === "facile")
	{
		positionAleatoire = Math.floor(Math.random()*9)+1;
		var lettreElt= document.getElementById("name_input"+positionAleatoire);
		lettreElt.value = voyelleAleatoire;
	}
	else {
		positionAleatoire = Math.floor(Math.random()*7)+1;
		var lettreElt1= document.getElementById("name_input"+positionAleatoire);
		lettreElt1.value = voyelleAleatoire;	
	}
	 
});

function calculScore(niveau)
{
	var dicoElt = document.getElementById("dico");
	var motDicoElt = dicoElt.getElementsByTagName("tr");
	var score1= 0 ; 				
		switch (form.elements.niveau.value) // on indique sur quelle variable on travaille

				{   case "facile":
							for (var i=0 ; i < form.elements.propositions.length; i++){
								for (var j=0 ; j < motDicoElt.length; j++){
									
									
								var result =( motDicoElt [j] .textContent.toUpperCase()== form.elements.propositions.options[i].value.toUpperCase());
	
								if (result == true ) {
									console.log ("test abouti");
									score1 += ( motDicoElt[j].textContent.length - 1)* 5 - (nbrAide * 2);
								}
											
																				
							}
							}
							

					break;
					
				case "moyen":
							for (var i=0 ; i < form.elements.propositions.length; i++){
								for (var j=0 ; j < motDicoElt.length; j++){
									
									
											
												var string_1 = new String(motDicoElt [j] .textContent);
												var string_2 = new String(form.elements.propositions.options[i].value);
										
												// if ( string_1.valueOf().toUpperCase() === string_2.valueOf().toUpperCase() )
													
												var result = string_1.valueOf().toUpperCase().indexOf(string_2.valueOf().toUpperCase());


												if (result > -1) {
											
													console.log ("test abouti2");
													score1 += ( motDicoElt[j].textContent.length - 1)* 8 - (nbrAide * 2);
												}
											
																				
							}
							}
							

					break;
					case "difficile":
							for (var i=0 ; i < form.elements.propositions.length; i++){
								
								for (var j=0 ; j < motDicoElt.length; j++){
									
									
											
												var string_1 = new String(motDicoElt [j] .textContent);
												var string_2 = new String(form.elements.propositions.options[i].value);
										
												// if ( string_1.valueOf().toUpperCase() === string_2.valueOf().toUpperCase() )
													
												var result = string_1.valueOf().toUpperCase().indexOf(string_2.valueOf().toUpperCase());


												if (result > -1) {
											
													console.log ("test abouti3");
													score1 += ( motDicoElt[j].textContent.length - 1)* 10 - (nbrAide * 2);
												}
											
																				
							}
							}
							

					break;
				}
	return score1 ;
}
				
				
				var boutonElt8 = (document.getElementsByTagName("input"))[9];
				 boutonElt8.addEventListener("submit", function (){
					
					
					  
				});
				
			
	var boutonElt8 = (document.getElementsByTagName("input"))[9];
				 boutonElt8.addEventListener("mousedown", function (){
					
					 for (var i=0 ; i < form.elements.propositions.length; i++){
							console.log(form.elements.propositions.options[i].value.toUpperCase());	 
							var bool = verification(form.elements.propositions.options[i].value.toUpperCase());
							console.log(bool);
						 if ( bool == true ){
							 
							form.elements.propositions.options[i].selected = "selected" ;
						 }
					 }	
					 
					 var test2 = calculScore( form.elements.niveau.value );
					 score = test2;
					 
					 var boutonElt10 = (document.getElementById("scoreIn"));
			boutonElt10.setAttribute("value",test2);
			        	
							
			});
			
			
			
function verification(mot){
	
	console.log(mot);
	var chaineAle = '';
	var conforme = true ; 
	if (form.elements.niveau.value == "facile"){
		for (var i =0; i<10 ; i++){
			chaineAle =  chaineAle + document.getElementById("name_input"+i).value;
		}
	}
	else {
		for (var i =0; i<8 ; i++){
			chaineAle += document.getElementById("name_input"+i).value;
		}
	}
	
	var chaine = new String(chaineAle);
	
	
	var i = 0;

	while((i< mot.length)&&(conforme == true)) {
		
		if (chaine.indexOf(mot[i]) == -1){
			conforme = false ;
		}
		
		else if (chaine.indexOf(mot[i]) == (chaineAle.length -1))
		{
			chaine.valueOf() = chaine.substring(0, chaine.indexOf(mot[i])-1);
			i++;
		}
		
		else 
		{
			var nick_1 = chaine.substring(0, chaine.indexOf(mot[i])-1);
			var nick_2 = chaine.substring(chaine.indexOf(mot[i])+ 1); 
			
			console.log ( chaine.valueOf() ); 
			console.log (  nick_1.valueOf() );
			console.log ( nick_2.valueOf() );
			console.log ( typeof ( nick_1.valueOf().concat(nick_2.valueOf()) ));
			chaine.valueOf() = String(nick_1.valueOf().concat(nick_2.valueOf())) ;
			i++;
		}
		
		
	}
	
	
	console.log(conforme);
	
	//var result = chaineAle.indexOf('A');
	//console.log(result);
	return true ;
	
	
}