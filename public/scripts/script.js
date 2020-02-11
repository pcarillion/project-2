
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


 var filterValueCyl;
 var filterValueBrand;
 var filterValueType;

  $('#brandButtons').on( 'click', 'button', function() {
      console.log("button clicked")
    filterValueBrand = $(this).attr('data-filter');
        console.log(filterValueBrand)
    // filterValue = filtrerCylindrée[ filterValue ] || filterValue;
    // return filterValueBrand
    $bikeCollection.isotope({ filter: filterValueBrand });
  });

  $('#engineButtons').on( 'click', 'button', function() {
    // console.log("button clicked")
  filterValueCyl = $(this).attr('data-filter');
      console.log(filterValueCyl)
  filterValueCyl = filtrerCylindrée[ filterValueCyl ] || filterValueCyl;
//   return filterValueCyl
  $bikeCollection.isotope({ filter: filterValueCyl });
});


$('#typeButtons').on( 'click', 'button', function() {
    console.log("button clicked")
  filterValueType = $(this).attr('data-filter');
      console.log(filterValueType)
  // filterValue = filtrerCylindrée[ filterValue ] || filterValue;
  // return filterValueBrand
  $bikeCollection.isotope({ filter: filterValueType });
});

//  $bikeCollection.isotope({ filter: filterValue })

// //   $bikeCollection.forEach((val, i) => {
// //     i%2 ? val.className += " redBackground" : "";
// // })

//     // var elements = document.querySelectorAll(".bike-container");
//     // elements.forEach((val, i) => {
//     //     var notDisplayed = getComputedStyle(val).getPropertyValue("display");
//     //     console.log(notDisplayed)
//     //     if (notDisplayed == "none") elements[i].remove();
//     // })
//     // console.log(elements)




  

  var filtrerCylindrée = {
    // filter element with numbers greater than 50
    petiteCylindrée: function() {
      // _this_ is the item element. Get text of element's .number
      var engine = $(this).find('.engine').text();
      // return true to show, false to hide
      console.log(engine)
      console.log(parseInt(engine, 10 ) < 500)
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


  

//   var filters = {};

//   $('.filter-button-group').on('click', 'button', 


//     function(event) {

//         console.log("hey")

//         var $button = $(event.currentTarget);
//         console.log($button)

//         var $buttonGroup = $button.parents('.buttonGroup');

//         var filterGroup = $buttonGroup.attr('data-filter-group');

//         filters[ filterGroup ] = $button.attr('datafilter');

//         var filterValue = concatValues( filters );

//         $bikeCollection.isotope({filter : filterValue})
//     }
//   )

//   function concatValues( obj ) {
//     var value = '';
//     for ( var prop in obj ) {
//       value += obj[ prop ];
//     }
//     return value;
//   }
  




$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });