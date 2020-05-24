require('jquery.scrollex');

let app = {

  init: function() {

    console.log('init');

    // Mise en place de Rellax
    // Rellax est disponible ici car déclaré dans 
    // notre fichier de conf de Webpack (ProvidePlugin)
    // https://www.npmjs.com/pavkage/rellax
    let rellax = new Rellax('.header', {
      speed: 4
    });

    // Mise en place de scrollex
    // Je commence par cibler toutes mes sections dans mon main
    $('.main > section').each(function() {

      // Pour chaque section (each)...

      // console.log(this);
      // this = ma section

      // je "jquerise" mon élement (= ma section)
      // $(this) = ma section jquerysée

      // Je récupère l'd de délement (= ma section)
      // il correspond à mon ancre
      // cela me sera utile plus tard...
      let id = $(this).attr('id');

      // console.log(id);

      //console.log($(this));
      
      // J'applique scrollex sur mon element (= ma section)
      $(this).scrollex({

        // Je dit à scrollex de se baser sur le milieu de la page
        // https://www.npmjs.com/package/jquery.scrollex#mode
        mode: 'middle',

        // Lorsque mon élement rentre sur la page (= milieu car mode: middle)
        // https://www.npmjs.com/package/jquery.scrollex#enter
        enter: function() {

          app.handleEnterElement(id);

          // console.(this);
          // console.log('est entré sur la page');
        },
        // Lorsque mon élement sort de la page ('=milieu car mode: middle')
        // https://www.npmjs.com/package/jquery.scrollex#leave
        leave: function() {

          app.handleLeaveElement(id);

          // console.log(this);
          // console.log('est sorti de la page');
        
        }
      });    
    });

    // Mise en place du Smoothscroll
    // Je vais cibler mes élements de type <a>.
    // Problème, je ne souhaite pas déclencher de smoothscroll sur mes
    // éventuels liens vers des pages externes (ex: <a qui ont un href="http://oclock.io">).
    // Je vais donc cibler mes élements de type <a>qui ont un href
    // avec un # (non vide) (ex: <a href="#toto">).
    /*
      a[href*="#"] => Je veux tout les élements A avec un href qui comporte une ancre (vide ou non)
      ancienne
      :not([href="#"]) => Parmis ceux là, je ne veux pas ceux qui sont strictement égale à (href=)

      Au final: je veux tout les éléments A avec un href qui comporteune ancre non vide
     */
      $('a[href*="#"]:not([href="#"])').on('click', app.handleLinksClick);

  },
  handleEnterElement: function(element_id) {

    $('.navigation a[href="#'+element_id+'"]').addClass('active');
    
  },
  handleLeaveElement: function(element_id) {
    
    $('.navigation a[href="#'+element_id+'"]').removeClass('active');

  },
  handleLinksClick: function(evt) {

    console.log(evt);

    // Je suprime l'évenement par défaut de l'ancre
    evt.preventDefault();

    // Je récupère l' élément sur lequel on a clické
    let clickedElement = evt.target;

    console.log(clickedElement);
    console.log(clickedElement.hash);

    // object.hash => Me permet de récuperer la valeur du href
    // httpps://developper.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash

    // je jqueryse l'élement sur lequel je souhaite me rendre
    let $target = $(clickedElement.hash);
    
    // $target contient donnc l'élement de ma page où je doit scroller
    console.log($target);

    // je regarde si la propriété .length me retourne quelque chose 
    // En gros, je vérifie si mon élément existe bien !
    if ($target.length) {

      // je viens calculer la position de lon élément ciblé
      // par rapport au haut de la page 
      let targetPosition = $target.offset().top;

      // je viens animer le scroll
      $('html, body').animate({
        'scrollTop': targetPosition
      }, 2000);
    }
  }
};

$(app.init);
