document.getElementById("SignOutBt").onclick = function(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "Login.html";

      }).catch((error) => {
        // An error happened.
      });
}