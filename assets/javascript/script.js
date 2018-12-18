//variables
var anger;
var joy;
var fear;
var sadness;
var surprise;
var horoscope;
var predictedDay;

// Attach a submit handler to the form
$("#searchForm").submit(function (event) {


    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
        term = $form.find("input[name='s']").val(),
        url = "https://aztro.sameerkumar.website?sign=" + term + "&day=today";


    // Send the data using post
    var posting = $.post(url, "");

    // Put the results in a div
    posting.done(function (data) {
        //var content = $(data);
        horoscope = data.description;
        // $("#result").empty().append("RESPONSE: <pre>" + JSON.stringify(content) + "</pre>");
        console.log(horoscope);

        $.post(
            'https://apiv2.indico.io/sentiment',
            JSON.stringify({
              'api_key': "472f187a7c554f42d719990a387ff96c",
              'data': horoscope
            })
          ).then(function(response) { 
        
            console.log(response);
        //   if (response.results.hasOwnProperty('anger')) {
        //     anger == true;
        //     console.log("Anger");
        //   }
          
        //   if (response.results.hasOwnProperty('joy')) {
        //     joy == true;
        //     console.log("Joy");
        //   }
          
        //   if (response.results.hasOwnProperty('fear')) {
        //     fear == true;
        //     console.log("Fear");
        //   } 
          
        //   if (response.results.hasOwnProperty('sadness')) {
        //     sadness == true;
        //     console.log("Sadness");
        //   } 
          
        //   if (response.results.hasOwnProperty('surprise')) {
        //     surprise == true;
        //     console.log("Surprise");
        //   } 

        
            //clear userInput value
            if (response.results >= 0.5) {
                console.log("You're going to have a good day.")
            } else {
                console.log("You might have a bad day.")
            }
        
          });
        
        });
        
    });

// $("#feelingsButton").on("click", function() {
  
  // batch example
 
    
// });
