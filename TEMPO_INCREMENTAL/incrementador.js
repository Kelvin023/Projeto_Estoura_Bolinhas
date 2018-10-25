/*window.onload = function(){
    document.getElementById('tempo').innerHTML = setInterval(incrementador, 1000);
}
var i = 0; 
function incrementador() {
    console.log('Coisa: ' + i);
    i++;
}*/

window.onload = function(){
    setInterval(incrementador, 1000);    
}

var i = 0; 
function incrementador() {
    document.getElementById('tempo').innerHTML = i+'s';
    console.log('Coisa: ' + i);
    i++;
}
