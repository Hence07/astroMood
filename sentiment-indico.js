// // single example
// $.ajax(
//     'https://apiv2.indico.io/sentiment',
//     JSON.stringify({
//       'api_key': "472f187a7c554f42d719990a387ff96c",
//       'data': "I love writing code!",
//       method: "GET"
//   ).then(function(response){
//        console.log(res) 
//         }
//   );

var userInput = "I'm feeling great today!";
  
  // batch example
  $.post(
    'https://apiv2.indico.io/emotion',
    JSON.stringify({
      'api_key': "472f187a7c554f42d719990a387ff96c",
      'data': userInput,
      'threshold' : 0.1
    })
  ).then(function(response) { 

    console.log(response.results);
    console.log(response)

  });