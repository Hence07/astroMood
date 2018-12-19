//variables
var birthdate;
var horoscope;
var predictedDay;
var splitDate;
var userMonth;
var userDate;
var userSign;
var sentiment;
var barWidth;
var stringMonth;

$(function() {
    $( "#datepicker" ).datepicker({
        changeMonth : true,
        dateFormat: 'dd MM'
    });
})



// Attach a submit handler to the form
$(document).on("click", "#send", function (event) {

    event.preventDefault();


    //use animate.css to shake the button if there's no input for the calendar or name
    if (($('#full-name').val() == '') || ($("#date-picker").val() == '')) {
        $(this).addClass("animated shake");
    }


    //grab date from datepicker for zodiac sign function
        //get rid of last 4 digits
        birthdate = $("#datepicker").val();

        splitDate = birthdate.split(" ");
        userDate = splitDate[0];
        stringMonth = splitDate[1];

        if (stringMonth == "January") {
            userMonth = 1;
        }
        if (stringMonth == "February") {
            userMonth = 2;
        }
        if (stringMonth == "March") {
            userMonth = 3;
        }
        if (stringMonth == "April") {
            userMonth = 4;
        }
        if (stringMonth == "May") {
            userMonth = 5;
        }
        if (stringMonth == "June") {
            userMonth = 6;
        }
        if (stringMonth == "July") {
            userMonth = 7;
        }
        if (stringMonth == "August") {
            userMonth = 8;
        }
        if (stringMonth == "September") {
            userMonth = 9;
        }
        if (stringMonth == "October") {
            userMonth = 10;
        }

        if (stringMonth == "November") {
            userMonth = 11;
        }

        if (stringMonth == "December") {
            userMonth = 12;
        }
        

        //create if statements to calculate the range of dates for birthdays


        //aries mar 21 - apr 19
        if ((userMonth == 03 && userDate >= 21) || (userMonth == 04 && userDate <= 19))  {
            userSign = "aries";
            zodiacImg = "./assets/img/zodiac-svg/aries-symbol.svg";
        }

        //taurus apr 20 - may 20
        if ((userMonth == 04 && userDate >= 20) || (userMonth == 05 && userDate <= 20))  {
            userSign = "taurus";
            zodiacImg = "./assets/img/zodiac-svg/taurus-zodiac-symbol-of-bull-head-front.svg";
        }

        //gemini may 21 - june 20
        if ((userMonth == 05 && userDate >= 21) || (userMonth == 06 && userDate <= 20))  {
            userSign = "gemini";
            zodiacImg = "./assets/img/zodiac-svg/gemini-zodiac-symbol-of-two-twins-faces.svg";
        }

        //cancer jun 21 - jul 22
        if ((userMonth == 06 && userDate >= 21) || (userMonth == 07 && userDate <= 22))  {
            userSign = "cancer";
            zodiacImg = "./assets/img/zodiac-svg/cancer-astrological-sign-of-crab-zodiac-sign.svg";
        }

        //leo jul 23 - aug 22
        if ((userMonth == 07 && userDate >= 23) || (userMonth == 08 && userDate <= 22))  {
            userSign = "leo";
            zodiacImg = "./assets/img/zodiac-svg/leo-astrological-sign.svg";
        }

        //virgo aug 23 - sep 22
        if ((userMonth == 08 && userDate >= 23) || (userMonth == 09 && userDate <= 22))  {
            userSign = "virgo";
            zodiacImg = "./assets/img/zodiac-svg/virgo-woman-head-shape-symbol.svg";
        }

        //libra sep 23 - oct 22
        if ((userMonth == 09 && userDate >= 23) || (userMonth == 10 && userDate <= 22))  {
            userSign = "libra";
            zodiacImg = "./assets/img/zodiac-svg/libra-scale-balance-symbol.svg";
        }

        //scorpio oct 23 - nov 21
        if ((userMonth == 10 && userDate >= 23) || (userMonth == 11 && userDate <= 21))  {
            userSign = "scorpio";
            zodiacImg = "./assets/img/zodiac-svg/scorpion-shape-of-zodiac-sign.svg";
        }

        //sagittarius nov 22 - dec 21
        if ((userMonth == 11 && userDate >= 22) || (userMonth == 12 && userDate <= 21))  {
            userSign = "sagittarius";
            zodiacImg = "./assets/img/zodiac-svg/sagittarius-arch-and-arrow-symbol.svg";
        }

        //capricorn dec 22 - jan 19
        if ((userMonth == 12 && userDate >= 22) || (userMonth == 01 && userDate <= 19))  {
            userSign = "capricorn";
            zodiacImg = "./assets/img/zodiac-svg/capricorn-goat-animal-shape-of-zodiac-sign.svg";
        }

        //aquarius jan 20 - feb 18
        if ((userMonth == 01 && userDate >= 20) || (userMonth == 02 && userDate <= 18))  {
            userSign = "aquarius";
            zodiacImg = "./assets/img/zodiac-svg/aquarius-water-container-symbol.svg";
        }

        //pisces feb 19 - mar 20
        if ((userMonth == 02 && userDate >= 19) || (userMonth == 03 && userDate <= 20))  {
            userSign = "pisces";
            zodiacImg = "./assets/img/zodiac-svg/pisces-astrological-sign-symbol.svg";
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

            $("#horoscope-result").text("");

            var zodiacIcon = $("<img>");
            $(zodiacIcon).attr("src", zodiacImg);
            $("#horoscope-result").append(zodiacIcon);
 
            var horoscopeDiv = $("<div>");
            horoscopeDiv.text(horoscope);
            $("#horoscope-result").append(horoscopeDiv);



           

        
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

            $("#pos-bar").css("width", (barWidth + "%"));

          });

          
        
        });

       
        
    });

    $("#clear-form").on("click", function () {
        location.reload();
    })

// $("#feelingsButton").on("click", function() {
  
  // batch example
 
    
// });
