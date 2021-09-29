function Subtract() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let suntract = num1 - num2;
  document.getElementById("sum").innerHTML = suntract;
}

function divid() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let Divid = num1 / num2;
  document.getElementById("sum").textContent = "Sum: " + Divid;
}

function Total() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let total = parseInt(num1) + parseInt(num2);
  document.getElementById("sum").textContent = "Sum: " + total;
}

function multiply() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let multi = num1 * num2;
  document.getElementById("sum").textContent = "Sum: " + multi;
}
