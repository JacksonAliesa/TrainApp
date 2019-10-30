// Pseudo Code
// rows of data that are being kept within the database-firebase
//takes in 4 inputs for train info
//each new input gets stored in the table
// submit --> ref push __> firebase __> onchildappend---> data display
//submit the train request should trigger an alert that it was submitted successfully
//calculate when the next train should arrive should be relevant to current time

//initialize firebase
// 1 hard code form that takes in name, destination, 1st train time (military format), and frequency in minutes
// 2 hard code in HTML and empty table w/ table head of name, dest, freq, next arrival, and mins away. include a table body
//tbody tag-- totally empty
// 3 build on click function for submit button
// 4 inside onclick funtion -make 4 var to capture the values form the 4 input boxes using jquery -console log var-- use ref.push firebase funciton to end
//those variables to database
// check firecase to see that theyre
//5 once verified that database is working use onchild added to listen for new database values(outside of onclick function)

//firebase 


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3Qy_hcniWvFEJC4gt1YreYNmgDK0tVpo",
    authDomain: "aliesa-s-app.firebaseapp.com",
    databaseURL: "https://aliesa-s-app.firebaseio.com",
    projectId: "aliesa-s-app",
    storageBucket: "aliesa-s-app.appspot.com",
    messagingSenderId: "147522220540",
    appId: "1:147522220540:web:7f156b9c1e2a1fabd0c279"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //make variable to reference the database 

  var database = firebase.database();

  //create variables to use within the Onclick function to capture the values from the HTML file once user clicks submit on form
  var trainName; 
  var trainDestination; 
  var trainTime; 
  var trainFreq; 

  //onclick function for the submit button will capture results from the user's input
  $("button").on("click", function(event){
   

  event.preventDefault();
  
  trainName = $("#inputTrain").val();
  console.log(trainName);
  trainDestination = $("#inputDes").val();
  console.log(trainDestination);
  trainTime = $("#inputTime").val();
  console.log(trainTime);
  trainFreq = $("#inputFreq").val();
  console.log(trainFreq);

// adding function to input data into database that pushes each item into a new row on interface
// this needs to be within the button click function so it can be pushed after the user CLICKS submit
database.ref().push({
  trainName: trainName,
  trainDestination: trainDestination,
  trainTime: trainTime,
  trainFreq: trainFreq
});

});

database.ref().on("child_added", function(snapshot){
  var sv = snapshot.val();

  console.log(sv.trainName)
  console.log(sv.trainDestination)
  console.log(sv.trainTime)
  console.log(sv.trainFreq)

  //make a new row variable
  var newRow = $("<tr>")
  //make multiple TD rows var for train name, des, time, freq
  var nameTD = $("<td>")
  var desTD = $("<td>")
  var timeTD = $("<td>")
  var freqTD = $("<td>")
  var minsTD = $("<td>")

  //make text visible using the sv variable 
   nameTD.text(sv.trainName);
   //append to the new row
   newRow.append(nameTD);
   
   //make text visible
   desTD.text(sv.trainDestination);
   //append to the new row
   newRow.append(desTD);

    //make text visible
    freqTD.text(sv.trainFreq);
    //append to the new row
    newRow.append(freqTD);

   //make text visible
   timeTD.text();
   //append to the new row
   newRow.append(timeTD);

  

  //make text visible 
  minsTD.text()
  //append to new row
  newRow.append(minsTD);


  //append new row variable to tbody
  $("tbody").append(newRow)


});



