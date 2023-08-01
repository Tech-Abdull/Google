document.getElementById("Continue").onclick = function (){
    let email = document.getElementById("LoginEmail").value;
    let password = document.getElementById("Password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location.href = "Home1.html"

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}