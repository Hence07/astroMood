//variables
var birthdate;
var horoscope;
var predictedDay;
var noYear;
var noSlash;
var birthString;
var splitDate;
var userMonth;
var userDate;



// Attach a submit handler to the form
$("#zodiacForm").submit(function (event) {

    event.preventDefault();

    //grab date from datepicker for zodiac sign function
        //get rid of last 4 digits
        birthdate = $("#datepicker").val();

        noYear = birthdate.slice(0, -5);
        splitDate = noYear.split("/");
        userMonth = splitDate[0];
        userDate = splitDate[1];
        

        console.log(birthdate);
        console.log(noYear);
        console.log(splitDate);
        console.log(userMonth);
        console.log(userDate);

        //create if statements to calculate the range of dates for birthdays

        //aries mar 21 - apr 19
        if ((userMonth == 03 && userDate >= 21) || (userMonth == 04 && userDate <= 19))  {
            console.log("they're an aries")
        }

        //assign zodiac signs for date ranges



    // Stop form from submitting normally
    

    // Get some values from elements on the page:
        birthdate = $("#datepicker").val();
        console.log(birthdate);
        url = "https://aztro.sameerkumar.website?sign=" + birthdate + "&day=today";


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
                predictedDay = "You're going to have a good day.";
                $("#output").text(predictedDay);
            } else {
                predictedDay = "You might have a bad day.";
                $("#output").text(predictedDay);
            }
          });
        
        });
        
    });

// $("#feelingsButton").on("click", function() {
  
  // batch example
 
    
// });
