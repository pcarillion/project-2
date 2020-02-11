const hbs = require("hbs");


hbs.registerHelper("createEngineClass", function(number) {
    if (number < 500) return "smallEngine";
    if (number > 500 && number < 766) return "midEngine";
    if (number > 766) return "bigEngine";
  });
  
  