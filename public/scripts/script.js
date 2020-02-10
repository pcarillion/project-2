
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