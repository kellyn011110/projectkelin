function masuk() {
  var user = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if(user == "" || email == "" || pass == "") {
    alert("Please fill in all fields!");
  }
  else {
    alert("Welcome to Kellyn Cafe!");
    location.href = "home.html";
  }
}