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
  
  // batch example
  $.post(
    'https://apiv2.indico.io/sentiment/batch',
    JSON.stringify({
      'api_key': "472f187a7c554f42d719990a387ff96c",
      'data': [
        "I love writing code!",
        "Alexander and the Terrible, Horrible, No Good, Very Bad Day"
      ]
    })
  ).then(function(res) { console.log(res) });