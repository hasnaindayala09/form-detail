var form = document.getElementById("name");
var form1 = document.getElementById("name2");
var form2 = document.getElementById("name3");
var form3 = document.getElementById("standard-select");
var form4 = document.getElementById("standard-select1");
var form5 = document.getElementById("standard-select2");
var form6 = document.getElementById("html");
var form7 = document.getElementById("css");
var form8 = document.getElementById("javascript");

function register() {
  if (form6.checked) {
    console.log("form6 is selected");
  } else if (form7.checked) {
    console.log("form7 is selected");
  }

  console.log(form.value);
  console.log(form1.value);
  console.log(form2.value);
  console.log(form3.value);
  console.log(form4.value);
  console.log(form5.value);
  console.log(form6.value);
  console.log(form7.value);
  console.log(form8.value);
}
