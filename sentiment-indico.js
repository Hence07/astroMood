

$("#feelingsButton").on

var userInput = $("#emotion-input").val();
  
  // batch example
  $.post(
    'https://apiv2.indico.io/emotion',
    JSON.stringify({
      'api_key': "472f187a7c554f42d719990a387ff96c",
      'data': userInput,
      'threshold' : 0.1
    })
  ).then(function(response) { 

  if (response.results.hasOwnProperty('anger')) {
    console.log("Anger");
  } else if (response.results.hasOwnProperty('joy')) {
    console.log("Joy");
  } else if (response.results.hasOwnProperty('fear')) {
    console.log("Fear");
  } else if (response.results.hasOwnProperty('sadness')) {
    console.log("Sadness");
  } else if (response.results.hasOwnProperty('surprise')) {
    console.log("Surprise");
  } else {
    console.log("Didn't get an emotion off this. Sorry.");
  }

    console.log(response.results);
    // $("#result").text("The user is feeling ";
    console.log(response)

  });