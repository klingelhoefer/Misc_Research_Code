//Allows to show hh:mm format on a slider in SosciSurvey
//more info in sosci-help: https://www.soscisurvey.de/help/doku.php/en:create:questions:slider / https://www.soscisurvey.de/help/doku.php/de:create:questions:slider#anzeige_der_aktuellen_position

//IMPORTANT: Create slider and input a VALUE RANGE from 1 to 86401
//Then: Copy the code below into "additional code"


//_____________________paste below___________________________//

var formatter = function(value, reversed) {
  // Show nothing if value is below 0 (e.g., missing)
  if (value < 0) return "";

var val_hours = (value - 1) / 86400 * 24;
//One day is 86400 seconds --> transform to 24h value range
  
var val_slice = val_hours.toFixed(4).slice(-4);
//round to last 4 decimals and only include the last 4 decimals

var val_minutes = (parseFloat(val_slice)/(100*100)*60);
//multiply decimals to range from 0-100, transform to minutes

if(val_minutes.toFixed(0)<10) {val_minutes = String("0" + val_minutes.toFixed(0))}
else {val_minutes = val_minutes.toFixed(0)}
//adding leading zero if value is below 10 otherwise returning two digit value (10 or higher)
//rounding in if condition to prevent rounding errors leading to more than two digits
 
return String(Math.round(val_hours) + ":" + val_minutes);};
// returning string of transformed value

SoSciSliders.setFormat(formatter);
