import firebase from "firebase";
import $ from "jquery";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3xut5UctuJrPm_4OyBnRAO6S76nPeYGk",
    authDomain: "accessible-travel.firebaseapp.com",
    databaseURL: "https://accessible-travel.firebaseio.com",
    projectId: "accessible-travel",
    storageBucket: "",
    messagingSenderId: "632103690379"
};

// Variables with user authentication


const FB = firebase.initializeApp(config);
var FBApp = FB.database();


// Add a realtime listener for firebase authentication
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser)
        console.log(firebaseUser.email)
        $(".notsignedin").hide();
        $(".signedin").show();
        $("#username").append("Welcome, " + firebaseUser.email);
    } else {
        console.log('not logged in');
        $(".notsignedin").show();
        $(".signedin").hide();
        $("#username").empty();
    }

});

export default FBApp;