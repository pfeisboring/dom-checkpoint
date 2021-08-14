
//declaration des variables
let price11 = document.getElementsById("price1").value;
let price22 = document.getElementsById("price2").value;
let price33 = document.getElementsById("price3").value;


let quantity11 = document.getElementsById("quantity1").value;
let quantity22 = document.getElementsById("quantity2").value;
let quantity33 = document.getElementsById("quantity3").value;


//incrementation de quantité
var addbtn1 = document.querySelector("#buttonadd1").addEventListener("click", function () {
    quantity11++;
    document.getElementsById("quantity1").innerHTML = quantity11;
})

var addbtn2 = document.querySelector("#buttonadd2").addEventListener("click", function () {
    quantity22++;
    document.getElementsById("quantity2").value = quantity22;
})

var addbtn3 = document.querySelector("#buttonadd3").addEventListener("click", function () {
    quantity33++;
    document.getElementsById("quantity1").value = quantity33;
})

//décrementation de quantité

var removebtn1 = document.querySelector("#buttonremove1").addEventListener("click", function () {
    quantity11--;
    document.getElementsById("quantity1").innerHTML = quantity11;
})

var removebtn2 = document.querySelector("#buttonremove2").addEventListener("click", function () {
    quantity22--;
    document.getElementsById("quantity1").value = quantity22;
})

var removebtn3 = document.querySelector("#buttonremove3").addEventListener("click", function () {
    quantity33--;
    document.getElementsById("quantity1").value = quantity33;
})

//calcul de total pour chaque voiture

let total1 = document.getElementsById("numtotal1").innerHTML=quantity11*price11;
let total2 = document.getElementsById("numtotal2").innerHTML=quantity22*price22;
let total3 = document.getElementsById("numtotal3").innerHTML=quantity33*price33;

//calcul de total pour tous les voitures
let somme = total + total2 + total3;
var total = document.getElementById("total").innerHTML="the total is"+somme;