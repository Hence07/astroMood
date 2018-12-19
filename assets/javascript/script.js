//variables
var birthdate;
var horoscope;
var predictedDay;
var noYear;
var splitDate;
var userMonth;
var userDate;
var userSign;
var sentiment;
var barWidth;
var name;


// Attach a submit handler to the form
$("#zodiacForm").submit(function (event) {

    event.preventDefault();

    //grab date from datepicker for zodiac sign function
        //get rid of last 4 digits
        birthdate = $("#datepicker").val();
        name = $("#full-name").val();
        localStorage.setItem("name", name);
        localStorage.setItem("birthday", birthdate);
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
            userSign = "aries";
        }

        //taurus apr 20 - may 20
        if ((userMonth == 04 && userDate >= 20) || (userMonth == 05 && userDate <= 20))  {
            userSign = "taurus";
        }

        //gemini may 21 - june 20
        if ((userMonth == 05 && userDate >= 21) || (userMonth == 06 && userDate <= 20))  {
            userSign = "gemini";
        }

        //cancer jun 21 - jul 22
        if ((userMonth == 06 && userDate >= 21) || (userMonth == 07 && userDate <= 22))  {
            userSign = "cancer";
        }

        //leo jul 23 - aug 22
        if ((userMonth == 07 && userDate >= 23) || (userMonth == 08 && userDate <= 22))  {
            userSign = "leo";
        }

        //virgo aug 23 - sep 22
        if ((userMonth == 08 && userDate >= 23) || (userMonth == 09 && userDate <= 22))  {
            userSign = "virgo";
        }

        //libra sep 23 - oct 22
        if ((userMonth == 09 && userDate >= 23) || (userMonth == 10 && userDate <= 22))  {
            userSign = "libra";
        }

        //scorpio oct 23 - nov 21
        if ((userMonth == 10 && userDate >= 23) || (userMonth == 11 && userDate <= 21))  {
            userSign = "scorpio";
        }

        //sagittarius nov 22 - dec 21
        if ((userMonth == 11 && userDate >= 22) || (userMonth == 12 && userDate <= 21))  {
            userSign = "sagittarius";
        }

        //capricorn dec 22 - jan 19
        if ((userMonth == 12 && userDate >= 22) || (userMonth == 01 && userDate <= 19))  {
            userSign = "capricorn";
        }

        //aquarius jan 20 - feb 18
        if ((userMonth == 01 && userDate >= 20) || (userMonth == 02 && userDate <= 18))  {
            userSign = "aquarius";
        }

        //pisces feb 19 - mar 20
        if ((userMonth == 02 && userDate >= 19) || (userMonth == 03 && userDate <= 20))  {
            userSign = "pisces";
        }




    // Stop form from submitting normally
    

    // Get some values from elements on the page:
        birthdate = $("#datepicker").val();
        console.log(birthdate);
        url = "https://aztro.sameerkumar.website?sign=" + userSign + "&day=today";


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

            console.log(response.results);
            sentiment = response.results;

            barWidth = (sentiment.toFixed(2) * 100);
            console.log(barWidth);

          });

          
        
        });
        
    });

// $("#feelingsButton").on("click", function() {
  
  // batch example
 
    
// });
