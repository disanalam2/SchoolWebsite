function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var admno = document.getElementById("admno").value;
    if (email == "disan.alam.986@firayalalpublicschool.edu.in" && admno== "986" && password == "asdf") {
        alert("Login successfully");
        window.open("/HTML/dashboard.html");
    }
    else {
        alert("INVALID LOGIN ID / ADM / PASSWORD");
    }
}