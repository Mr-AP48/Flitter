var firebaseConfig = {
      apiKey: "AIzaSyDgfNRIQcWDN_7FvLagIa8dT6tfalQHsiQ",
      authDomain: "lotify-cdd44.firebaseapp.com",
      databaseURL: "https://lotify-cdd44-default-rtdb.firebaseio.com",
      projectId: "lotify-cdd44",
      storageBucket: "lotify-cdd44.appspot.com",
      messagingSenderId: "7306770160",
      appId: "1:7306770160:web:6b9e9466e026bcdff27435",
      measurementId: "G-SCYX6RC5ZJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addRoom() {
      console.log("added")
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "lotify_page.html";
}

function getData() {
      console.log("called")
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lotify_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function announcements() {
      window.location.replace("lotify_a.html")
}