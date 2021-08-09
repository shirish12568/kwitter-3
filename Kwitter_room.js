var firebaseConfig = {
    apiKey: "AIzaSyAogJj8boWA60dLs-8ikLbDzyi3PNeDmI0",
    authDomain: "kwitter2-bbebd.firebaseapp.com",
    databaseURL: "https://kwitter2-bbebd-default-rtdb.firebaseio.com",
    projectId: "kwitter2-bbebd",
    storageBucket: "kwitter2-bbebd.appspot.com",
    messagingSenderId: "75728602223",
    appId: "1:75728602223:web:18e6ad92462737fc22799a",
    measurementId: "G-FPW1CCV99C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {
  var room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location="Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("Room name-"+Room_names);
  var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id')'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
});});};
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="Kwitter_page.html"; 
} 