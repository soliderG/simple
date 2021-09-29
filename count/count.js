let peaple = 0;
console.log(peaple);

function newPeaple() {
  peaple += 1;
  document.getElementById("count-el").innerHTML = peaple;
}
console.log(peaple);

function save() {
  let plus = " - ";
  document.getElementById("previus-el").textContent += peaple + plus;
  document.getElementById("count-el").innerHTML = 0;
  peaple = 0;
}

let name = "salar";
let family = "normohammdi";
let para = "Hello";
let fullName = name + " " + family + " , " + para + " !";
console.log(fullName);
