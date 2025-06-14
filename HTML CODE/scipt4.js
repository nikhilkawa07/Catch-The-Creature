var one = document.querySelector("#one");
var dec = document.querySelector("#dec");
var five = document.querySelector("#five");

var h1 = document.querySelector("h1");

var a =0;

one.addEventListener("click",function(){
 a++;
 h1.innerHTML = a;
})

dec.addEventListener("click",function(){
    a--;
    h1.innerHTML = a;
   

   five.addEventListener("click",function(){
    a= a+5;
    h1.innerHTML = a;
   }) 
