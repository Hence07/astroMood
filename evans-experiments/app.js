
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "fbfadac1",
  application_key: "f4757c18eb212a66d48aeac6d790ec48"
});

textapi.sentiment({
  'text': 
"I'm having a terrible day."
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});
