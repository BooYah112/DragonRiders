'use strict';

var TEXT_home = {
  agendatitle: 'EMPLOI DU TEMPS 2016-2017',

  txt_initiation: "<h2>Ecole de roller</h2>"+
                  "<h3>Horaires</h3>"+
                  "Samedi, de 9h30 à 11h00"+
                  "<h3>Adresse</h3>"+
                  "Salle des Sports"+
                  "<br>rue des remises, 95540 Méry sur Oise",

  txt_freestyle:  "<h2>Roller freestyle</h2>"+
                  "<h3>Horaires</h3>"+
                  "<b>Loisir</b>  : Samedi de 11h00 à 13h00"+
                  "<br><b>Compétition freeride</b> : Mardi de 18h00 à 20h00"+
                  "<br><b>Compétition slalom</b> : Mardi de 20h00 à 22h00"+
                  "<h3>Adresse</h3>"+
                  "Salle des Sports"+
                  "<br>rue des remises, 95540 Méry sur Oise",

  txt_hockey:     "<h2>Roller hockey </h2>"+
                  "<h3>Horaires</h3>"+
                  "<b>Groupe détente</b> (6-12 ans, parents débutants) : Dimanche de 9h30 à 10h30"+
                  "<br><b>Groupe ados/adultes</b>: Dimanche de 10h30 à 12h30"+
                  "<h3>Adresse</h3>"+
                  "Terrain de Sport en face de l'école de Vaux"+
                  "<br>117 rue Lamartine, 95540 Méry sur Oise",

    txt_soccer:   "<h2>Roller soccer</h2>"+
                  "<h3>Horaires</h3>"+
                  "Dimanche de 18h00 à 20h00"+
                  "<h3>Adresse</h3>"+
                  "Salle des Sports"+
                  "<br>rue des remises, 95540 Méry sur Oise",

    video_presentation:'<iframe width="100%" height="315" src="https://www.youtube.com/embed/m0rVwg_yasI" frameborder="0" allowfullscreen></iframe>',

    title_contact:  'Contact',
    img_contact_mail:   '<a href="mailto:dragon.riders95@gmail.com?subject=Demandes infos roller" title="Contacter Dragon Riders"><img width="80" src="assets/images/mail.png"></a>',
    img_contact_tel:    '<img width="80px" src="assets/images/phone.png">',

    txt_contact_mail:   'Infos générales: <b>dragon.riders95@gmail.com</b>'+
                        '<br>Spécifique Hockey: <b>panda.rollerhockey@gmail.com</b>',

    txt_contact_tel:    'Infos générales: Flavien Du Peloux 0627211590',

    title_inscription:  'Inscription au club 2016-2017',
    txt_inscription:    "<a class='w3-btn w3-border w3-half w3-round-xxlarge w3-light-grey' target='_blank' style='text-decoration:none' href='https://docs.google.com/document/d/1s3zGJYQ4-OUiuus3sQ5m0MLYrw3UMNM2EJiZNQIDTrU/edit?usp=sharing'><b>Fiche d'inscription enfant</b> </a>" +
                        "<a class='w3-btn w3-border w3-half w3-round-xxlarge w3-light-grey' target='_blank' style='text-decoration:none' href='https://docs.google.com/document/d/1CH245srE0dIUTVpy_zcq4262jP7uOQDHEzT0Lq2IY74/edit?usp=sharing'><b>Fiche adulte</b> </a>" +
                        "<br>"+
                        "<a class='w3-btn 3-border w3-half w3-round-xxlarge w3-light-grey' target='_blank' style='text-decoration:none' href='https://docs.google.com/document/d/1iWoUTljhR7gBjjCrNzqwCBThyqGs98uQy28O8YXEbkw/edit?usp=sharing'><b>Règlement<br>intérieur</b> </a>" +
                        "<a class='w3-btn 3-border w3-half w3-round-xxlarge w3-light-grey' target='_blank' style='text-decoration:none' href='https://docs.google.com/document/d/15OylId8aVKTrPh9ifDuhKTy5RcBl0n1beRFiyyos7q4/edit?usp=sharing'><b>Brochure<br>d'informations</b> </a>" ,

    google_sds_title: 'Adresse Salle des sports',
    google_sds_widget:  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.1121847441277!2d2.179792415887125!3d49.065502194054936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65e8b664be5a1%3A0x5754e4b2565f6dad!2s9+Rue+des+Remises%2C+95540+M%C3%A9ry-sur-Oise!5e0!3m2!1sfr!2sfr!4v1457431713260"     height="500" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>',
    google_vaux_title: 'Adresse terrain de vaux - hockey',
    google_vaux_widget: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20905.46867922383!2d2.143523339844227!3d49.066097669378124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65e54d6d6a501%3A0x8d2d68399e5f5a34!2s117+Rue+Lamartine%2C+95540+M%C3%A9ry-sur-Oise!5e0!3m2!1sfr!2sfr!4v1450106713568&z=14" height="500" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>'

};


var TEXT_initiation = {
    maincontent:
        "<div class='w3-card-8'>"+
          "<h1>Ecole de roller</h1>"+
          "<p>"+
          "Vous n'avez jamais mis les pieds dans des rollers mais vous souhaitez apprendre à dompter ces redoutables adversaires ? "+
          "Rien de plus facile, vous avez frappé à la bonne porte ! Séparés en groupes de niveaux, les jeunes (et moins jeunes) apprennent tout au long de l'année, par des jeux et des ateliers à avancer, freiner, "+
          "tourner, reculer... Pour au final sortir faire des randonnées dès l'apparition des beaux jours !"+
          "<br><b>Lieu</b>: salle des sports, Rue Courtil Bajou,  Méry sur Oise 95540"+
          "<br><b>Horaire: Samedi 9h30-11h</b></p>"+
        "</div>",
    photos:
        '<img class="img-margin" src="assets/images/photos/groupe_initiation.jpg">'
};

var TEXT_freestyle = {
  maincontent:
    "<div class='w3-card-8'>"+
      "<h1>Roller Freestyle</h1>"+
      "<p>"+
        "Discipline phare du club et la première enseignée, on apprend la pratique du roller freestyle à travers des jeux, des ateliers, des rires et de l'amusement. "+
        "Ce que l'on peut y apprendre est infini et nous vous accompagnerons dans la maîtrise totale de votre patin. Slalomer des plots avec différentes figures, sauter avec ou sans tremplin, "+
        "rouler en arrière, freiner en dérapage, faire des courses d'obstacles, toutes ces choses-là n'auront plus aucun secret pour vous dans quelques temps !"+
        "<br>Pour profiter comme il se doit de l'enseignement du freestyle, il est fortement conseillé d'avoir quelques années de pratique du roller derrière soi."+
        "<br><b>Lieu</b>: Salle des Sports, Rue Courtil Bajou,  Méry sur Oise 95540."+

        "<br><b>Horaires:</b>"+
        "<ul><li>Freestyle Loisir: <b>Samedi 11h00-13h00</b></li>"+
        "<li>Freestyle Compétition: <b>Mardi 18h-20h ou 20h-22h</b></li></ul>"+
      "</p>"+
    "</div>",

    photo: '<img class="img-margin" src="assets/images/photos/groupe_igor.jpg">',

    photos:
        '<img class="img-margin" src="assets/images/photos/groupe_competition2.jpg">'
};

var TEXT_hockey = {
  maincontent:
  "<div class='w3-card-8'>"+
    "<h1>Roller Hockey </h1>"+
      "<p>Avec son équipe des  PANDAS  géré par Jean-Luc GRAS, il y en a pour tous les goûts avec le roller hockey !"+
      "  Que ce soit pour de l'initiation hockey tranquille, pour jouer entre amis, apprendre les différentes techniques de jeux, ou faire des matches amicaux avec les clubs alentours."+
      "<br><b>Lieu:</b> Terrain de l'entrée de Vaux, rue Lamartine, Méry sur Oise."+
      "<br><b>Horaires:</b>"+
      "<ul><li>Hockey Détente  pour les 6/12 ans et les parents débutants: <b>Dimanche 9h30-10h30</b></li>"+
      "<li>Ados/Adultes: <b>Dimanche 10h30-12h30</b></li>"+
      "</ul>"+
      "</p>"+
      "<p><h5>Pour aller sur le site dédié à l'équipe des PANDAS <a href='http://club.quomodo.com/les_pandas/accueil.html'><b>cliquez ici ! </b></a></h5></p>"+
      
    "</div>"
};

var TEXT_soccer = {
    maincontent:
      "<div class='w3-card-8'>"+
        "<h1>Roller Soccer</h1>"+
        "<p> Nouvelle section montée en 2015, l'équipe des Dragon Ballz est inscrite pour le championnat Ile-de-France"+
        "<p>Le Roller soccer est un sport dérivé du football, ou plus précisément du foot en salle. "+
          "Il oppose deux équipes de cinq joueurs tous équipés de rollers sur un terrain de type handball, "+
          "Comme au football, l'usage des bras est strictement interdit. "+
          "<br>Si vous voulez vous essayer à ce sport très fun, intégrez l'équipe des Dragon Ballz et venez affronter les autres équipes de la région parisienne !</p>"+
          "<br><b>Lieu</b>: salle des sports, Rue Courtil Bajou,  Méry sur Oise 95540"+
          "<br><b>Horaire: Dimanche 18h00-20h00</b></p>"+
        "</p>"+


      "</div>",
      photos:
          '<img class="img-margin" src="assets/images/photos/soccer01.jpg">'+
          '<img class="img-margin" src="assets/images/photos/soccer02.jpg">'
};


var TEXT_multimedia = {
  photos_title:
    '<h1> Galerie Photo</h1>'+
    '<div class="container"><h3>Plus de photos: <a href="https://picasaweb.google.com/104538859437643038199" target="_blank">La chaine Picasa</a></h3></div>',

  videos_title:
    '<h1> Galerie Video</h1>'+
    '<div class="container"><h3>Plus de vidéos: <a href="https://www.youtube.com/user/DragonRiders95?feature=mhee" target="_blank">La chaine Youtube</a> </h3></div>',

  carousel_video:
    '<iframe class=w3-half width="560" height="315" src="https://www.youtube.com/embed/99XiONcdnMM" frameborder="0" allowfullscreen></iframe>'+
    '<iframe class=w3-half width="560" height="315" src="https://www.youtube.com/embed/vQqgtqUPD64" frameborder="0" allowfullscreen></iframe>'
};
