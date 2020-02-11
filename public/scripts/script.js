
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



  $('.filter-button-group').on( 'click', 'button', function() {
      console.log("button clicked")
    var filterValue = $(this).attr('data-filter');
        console.log(filterValue)
    $bikeCollection.isotope({ filter: filterValue });
  });

  

//   $bikeCollection.isotope({
//     // filter element with numbers greater than 50
//     filter: function() {
//       // _this_ is the item element. Get text of element's .number
//       var number = $(bike-container).find('.engine').text();
//       // return true to show, false to hide
//       return parseInt(engine, 10 ) > 50;
//     }
//   })