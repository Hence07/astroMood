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
        "There will be some big news today—and some wildly different first reactions to it. Don't assume that other people are feeling the same way you are—that kind of assumption will lead to problems. Wait until the dust has settled, and then do a casual inventory of other people's feelings. Once you get an idea of what everyone thinks, you will know what sort of response to suggest—and everyone will be much happier for it."
      ]
    })
  ).then(function(res) { console.log(res) });