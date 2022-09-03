 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBsE30C889I_wMYCJt7LTzAZ-ZadJLyWoE",
  authDomain: "kwitter-cb6f6.firebaseapp.com",
  databaseURL: "https://kwitter-cb6f6-default-rtdb.firebaseio.com",
  projectId: "kwitter-cb6f6",
  storageBucket: "kwitter-cb6f6.appspot.com",
  messagingSenderId: "780027830539",
  appId: "1:780027830539:web:b4c979da785d92d3c1020e",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
