function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var colorPicker = document.querySelector("input");
var colorPicker2 = document.querySelectorAll("input")[1];
var bodySelect = document.querySelector("body");

bodySelect.addEventListener("input", function(){
	console.log(hexToRgb(document.querySelector("input").value));
	document.querySelector("body").style.background = "linear-gradient(to right, "+ colorPicker.value +" , "+colorPicker2.value+")";

    var h5 = document.createElement("h5");
	h5.appendChild(document.createTextNode("First color : " + hexToRgb(colorPicker.value).r + " , " + hexToRgb(colorPicker.value).g + " , " + hexToRgb(colorPicker.value).b + "   Second color : " + hexToRgb(colorPicker2.value).r + " , " + hexToRgb(colorPicker2.value).g + " , " + hexToRgb(colorPicker2.value).b));
	bodySelect.appendChild(h5);
});
