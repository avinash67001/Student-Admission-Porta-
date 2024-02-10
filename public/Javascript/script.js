let bt = document.getElementById("submit");
let form = document.getElementsByClassName('Registration-form');
function Hello() {
  bt.innerHTML = "Congratulations ! Admission Successful";
  setTimeout(function () {
    bt.innerHTML = " ";
  }, 2000);
}


