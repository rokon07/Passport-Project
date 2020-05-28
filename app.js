//Author: Mohd Rokon
//Date: 5/27/2020
//Version 1.0

var firebaseConfig = {
  apiKey: "AIzaSyD4jba2JquTAehnwIT35Sl4tmfXZnsZ21E",
  authDomain: "passport-2020.firebaseapp.com",
  databaseURL: "https://passport-2020.firebaseio.com",
  projectId: "passport-2020",
  storageBucket: "passport-2020.appspot.com",
  messagingSenderId: "383896243523",
  appId: "1:383896243523:web:93efe6640feeca2318b3f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//get DOM elements
const submitButton = document.querySelector('#submit');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let status = document.querySelector('#status');
let dob = document.querySelector('#dob');
let email = document.querySelector('#email');

const db = firestore.collection("passportData");
document.getElementById('submitButton').addEventListener('click', function(){
  let firstNameInput = firstName.value;
  let lastNameInput = lastName.value;
  let dobInput = dob.value;
  let userStatus = status.value;
  let userEmail = email.value;
  db.doc().set({
    firstName: firstNameInput,
    lastName: lastNameInput,
    dob: dobInput,
    status: userStatus,
    email: userEmail
  })
  .then(function(){
    console.log("Data Saved");
  })
  .catch(function(error){
    console.log(error);
  });
});

const getButton = document.querySelector('#submit');
let getFirstName = document.querySelector('#getFirstName');
let getLastName = document.querySelector('#getLastName');
let getEmail = document.querySelector('#getEmail');

const query = document.querySelector('#query');

//create elements and render the query
//function renderQuery(doc){
  let h3 = document.createElement('h3');
  let statusSpan = document.createElement('span');
  statusSpan.textContent = doc.data().status;
  h3.appendChild(statusSpan);
  query.appendChild(h3);
}

function notFound(){
  let h3 = document.createElement('h3');
  let notFound = document.createTextNode("No result found!");
  h3.appendChild(notFound);
  query.appendChild(h3);
}

document.getElementById('getButton').addEventListener('click', function(){
  document.getElementById('getButton').addEventListener('click', $('h3').remove());
  //firestore.collection('passportData').get().then((snapshot) => {
    var check = false;
    snapshot.docs.forEach(doc => {
      console.log(doc.data().firstName);
      if(doc.data().firstName == getFirstName.value && doc.data().lastName == getLastName.value && doc.data().email == getEmail.value){
        renderQuery(doc);
        check = true;
      }
    });
    if(check == false){
      notFound();
    }
  });
});
