// document.getElementById('')

function leftClick(){
  document.getElementById('pic').style.display= "none"
  document.getElementById('picture').style.display= "block"
  document.getElementById('picture2').style.display= "none"
}

function rightClick() {
  document.getElementById('pic').style.display="block" 
  document.getElementById('picture').style.display= "none"
  document.getElementById('picture2').style.display= "none"
}

var anyVari =+ "fajfhdf"
console.log(typeof(anyVari)); 

function temperature() {
  var tempCelsius =+ prompt("enter celsious temperature");
  var tempFahrenheit = ( tempCelsius * 9/5) + 32;
  console.log(`Temperator in celsious is this ${tempCelsius} `);
  console.log(`Temperator in fahrenheit is this ${tempFahrenheit} `);
}
temperature()