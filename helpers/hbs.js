const hbs = require("hbs");


hbs.registerHelper("createEngineClass", function(number) {
    if (number < 500) return "smallEngine";
    if (number > 500 && number < 766) return "midEngine";
    if (number > 766) return "bigEngine";
  });
  
  
  
hbs.registerHelper("createA2Class", function(A2) {
  if (A2 == "true") return "A2";
  if (A2 == "false") return "";
});

