var anger;
var joy;
var fear;
var sadness;
var surprise;

$("#feelingsButton").on("click", function() {

var userInput = $("#emotion-input").val();
  
  // batch example
  $.post(
    'https://apiv2.indico.io/emotion',
    JSON.stringify({
      'api_key': "472f187a7c554f42d719990a387ff96c",
      'data': userInput,
      'threshold' : 0.5
    })
  ).then(function(response) { 

  if (response.results.hasOwnProperty('anger')) {
    anger == true;
    console.log("Anger");
  }
  
  if (response.results.hasOwnProperty('joy')) {
    joy == true;
    console.log("Joy");
  }
  
  if (response.results.hasOwnProperty('fear')) {
    fear == true;
    console.log("Fear");
  } 
  
  if (response.results.hasOwnProperty('sadness')) {
    sadness == true;
    console.log("Sadness");
  } 
  
  if (response.results.hasOwnProperty('surprise')) {
    surprise == true;
    console.log("Surprise");
  } 
  

    console.log(response.results);
    // $("#result").text("The user is feeling ";
    console.log(response)

  });

});