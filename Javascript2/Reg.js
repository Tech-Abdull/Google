document.getElementById("SignBtn").onclick = function (){
    let email = document.getElementById("RegEmail").value;
    let password = document.getElementById("RegPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    window.location.href = "Home1.html"

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

document.getElementById("GoogleBtn").onclick = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    // firebase.auth().languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage();

provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
      window.location.href = "Home1.html"

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  firebase.auth().signInWithRedirect(provider);
}