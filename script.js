function convert() {
  var from_unit = document.getElementById("from_unit").value;
  var to_unit = document.getElementById("to_unit").value;
  var input_value = document.getElementById("input_value").value;
  if(from_unit == "km" && to_unit == "m")
  {
	var result = input_value*1000;
	document.getElementById("result").innerHTML = input_value + " kilometers is " + result + " meters.";
  }
  else if (from_unit == "km" && to_unit == "mi") 
  {
    var result = input_value * 0.621371;
    document.getElementById("result").innerHTML = input_value + " kilometers is " + result + " miles.";
  } 
  else if (from_unit == "km" && to_unit == "ft") 
  {
    var result = input_value * 3280.839895;
    document.getElementById("result").innerHTML = input_value + " kilometers is " + result + " feets.";
  }
  else if (from_unit == "mi" && to_unit == "km") 
  {
    var result = input_value * 1.60934;
    document.getElementById("result").innerHTML = input_value + " miles is " + result + " kilometers.";
  } 
  else if (from_unit == "mi" && to_unit == "m") 
  {
    var result = input_value * 1609.34;
    document.getElementById("result").innerHTML = input_value + " miles is " + result + " meters.";
  }
  else if (from_unit == "mi" && to_unit == "ft") 
  {
    var result = input_value *5280 ;
    document.getElementById("result").innerHTML = input_value + " miles is " + result + " feets.";
  }
  else if (from_unit == "m" && to_unit == "km") 
  {
    var result = input_value / 1000;
    document.getElementById("result").innerHTML = input_value + " meters is " + result + " kilometers.";
  } 
  else if (from_unit == "m" && to_unit == "mi") 
  {
    var result = input_value / 1609.34 ;
    document.getElementById("result").innerHTML = input_value + " meters is " + result + " miles.";
  }
  else if (from_unit == "m" && to_unit == "ft") 
  {
    var result = input_value * 3.28084;
    document.getElementById("result").innerHTML = input_value + " meters is " + result + " feet.";
  }
  else if (from_unit == "ft" && to_unit == "km") 
  {
    var result = input_value / 3280.84;
    document.getElementById("result").innerHTML = input_value + " feet is " + result + " kilometers.";
  }
  else if (from_unit == "ft" && to_unit == "mi") 
  {
    var result = input_value / 5280;
    document.getElementById("result").innerHTML = input_value + " feet is " + result + " miles.";
  }
  else if (from_unit == "ft" && to_unit == "m") 
  {
    var result = input_value *  0.3048;
    document.getElementById("result").innerHTML = input_value + " feet is " + result + " meters.";
  } 
  else 
  {
    document.getElementById("result").innerHTML = "Invalid conversion.";
  }
}
