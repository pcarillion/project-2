
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

function toggleFilters() {
    document.querySelector("#filtersSection").classList.toggle("hidden")
} 

function toggleSorts() {
  document.querySelector("#sortButtons").classList.toggle("hidden")
} 

document.querySelector('#filterButton').onclick = toggleFilters ;
document.querySelector('#sortButton').onclick = toggleSorts;


// init isotope

  var $bikeCollection = $('#bike-collection').isotope({
    itemSelector: '.bike-container',
    getSortData: {
      brand: '.brand',
      engine: '.engine parsInt',
      price: '.price parsInt'
    }
 });

//  filter function

  var filters = {};

  $('.filter-button-group').on('click', 'button', 

     function(event) {

        console.log("hey")

        var $button = $(event.currentTarget);

        console.log($button)

        var $buttonGroup = $button.parents('.buttonGroup');

        console.log($buttonGroup);

        var filterGroup = $buttonGroup.attr('data-filter-group');

        console.log(filterGroup);

        filters[ filterGroup ] = $button.attr('data-filter');

        console.log(filters[ filterGroup ])

        var filterValue = concatValues( filters );

        console.log(filterValue)

        $bikeCollection.isotope({filter : filterValue})
    }
  )

  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
  }
  

// Sorting function

 
$('#sortButtons').on( 'click', 'button', function(){
  var sortValue = $(this).attr('data-sort-value');
  console.log(sortValue)
  $bikeCollection.isotope({sortBy : sortValue})
})
  

// button checked functions

$('.buttonGroup').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});
