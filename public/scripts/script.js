
let mybutton = document.getElementById("myBtn");

let bikeContainer = document.querySelectorAll(".bike-infos");
bikeContainer.forEach((val, i) => {
    i%2 ? val.className += " redBackground" : "";
})


function topFunction() {
    console.log("hey")
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  mybutton.onclick = topFunction



  var $bikeCollection = $('#bike-collection').isotope({
    itemSelector: '.bike-container',
 });

 console.log($bikeCollection)



  $('#brandButtons').on( 'click', 'button', function() {
      console.log("button clicked")
    var filterValue = $(this).attr('data-filter');
        console.log(filterValue)
    // filterValue = filtrerCylindrée[ filterValue ] || filterValue;
    $bikeCollection.isotope({ filter: filterValue });
  });

  $('#engineButtons').on( 'click', 'button', function() {
    console.log("button clicked")
  var filterValue = $(this).attr('data-filter');
      console.log(filterValue)
  filterValue = filtrerCylindrée[ filterValue ] || filterValue;
  $bikeCollection.isotope({ filter: filterValue });
});


  

  var filtrerCylindrée = {
    // filter element with numbers greater than 50
    petiteCylindrée: function() {
      // _this_ is the item element. Get text of element's .number
      var engine = $(this).find('.engine').text();
      // return true to show, false to hide
      console.log(engine)
      return parseInt(engine, 10 ) < 500;
    },

    moyenneCylindrée: function() {
        // _this_ is the item element. Get text of element's .number
        var engine = $(this).find('.engine').text();
        // return true to show, false to hide
        return parseInt(engine, 10 ) > 500 && parseInt(engine, 10) < 766;
      },

    grosseCylindrée: function() {
        // _this_ is the item element. Get text of element's .number
        var engine = $(this).find('.engine').text();
        // return true to show, false to hide
        return parseInt(engine, 10 ) > 766;
    }
  }

  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  