const firebaseConfig = {
    apiKey: "AIzaSyCVu5584FEJtDWdXrTi1DzS5A5QEAN9noE",
    authDomain: "cesabefirefox.firebaseapp.com",
    databaseURL: "https://cesabefirefox-default-rtdb.firebaseio.com",
    projectId: "cesabefirefox",
    storageBucket: "cesabefirefox.appspot.com",
    messagingSenderId: "81244915060",
    appId: "1:81244915060:web:e071674156274519e39821"
  };
  firebase.initializeApp(firebaseConfig)user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "bem-vindo ao XX," + user_name + "!";
  
  function send() {
  
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
    });
    document.getElementById("msg").value = "";
  }