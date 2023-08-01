document.getElementById("sign").onclick = function (){
    let email = document.getElementById("SignEmail").value;
    let password = document.getElementById("SignPassword").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location.href = "Home.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}