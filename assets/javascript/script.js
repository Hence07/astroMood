
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
        var content = data.description;
        $("#result").empty().append("RESPONSE: <pre>" + JSON.stringify(content) + "</pre>");
        
    });
    
});
