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

const db = firestore.collection("passportData");
document.getElementById('submitButton').addEventListener('click', function(){
  let firstNameInput = firstName.value;
  let lastNameInput = lastName.value;
  let dobInput = dob.value;
  let userStatus = status.value;
  db.doc().set({
    firstName: firstNameInput,
    lastName: lastNameInput,
    dob: dobInput,
    status: userStatus
  })
  .then(function(){
    console.log("Data Saved");
  })
  .catch(function(error){
    console.log(error);
  });
});
