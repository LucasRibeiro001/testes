 var r1 = document.querySelector('#r1');
 var r2 = document.querySelector('#r2');
 var total = document.querySelector('#rtotal');

 function addRec() {
    total.innerHTML = ((parseFloat(r1.value) + parseFloat(r2.value)).toFixed(2));
 }
 
 var c1 = document.querySelector('#c1');
 var c2 = document.querySelector('#c2');
 var c3 = document.querySelector('#c3');
 var saldo = document.querySelector('#sl');
 var saida = document.querySelector('#sd');

 function calc(){
    saldo.innerHTML = (( (parseFloat(r1.value)) + (parseFloat(r2.value)) ) - (( parseFloat(c1.value) ) + (parseFloat(c2.value)) + (parseFloat(c3.value))).toFixed(2));
    saida.innerHTML = ((parseFloat(c1.value) + parseFloat(c2.value) + parseFloat(c3.value)).toFixed(2));
 }