document.getElementById("SignOut").onclick = function () {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "Sign.html";
      }).catch((error) => {
        // An error happened.
      });
}