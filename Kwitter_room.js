const firebaseConfig = {
    apiKey: "AIzaSyCVu5584FEJtDWdXrTi1DzS5A5QEAN9noE",
    authDomain: "cesabefirefox.firebaseapp.com",
    databaseURL: "https://cesabefirefox-default-rtdb.firebaseio.com",
    projectId: "cesabefirefox",
    storageBucket: "cesabefirefox.appspot.com",
    messagingSenderId: "81244915060",
    appId: "1:81244915060:web:e071674156274519e39821"
  };
  

  function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "Adicionando sala",
  
  
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitterPage.html"
  }
  
  function getData() {
      firebase.database().ref("/").on("value", function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              console.log("Nome da sala" + Room_names);
              row = "<div class='room_name' id=" + Room_names +
                  " onclick ='redirectToRoomName(this.id)'># " +
                  Room_names + "</div> <hr>";
              document.getElementById("output").innerHTML += row;
          });
      })
  }
  getData();
  function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitterPage.html";
  }
  
  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")
  
 