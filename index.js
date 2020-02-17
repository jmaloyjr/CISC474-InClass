$(function () {
    $('#jumbo').hide();
    $('#go').on('click', function() { 
        
        event.preventDefault();
        firstName = $("#fname").val();
        lastName = $("#lname").val();
        $('#fillerText').text(lastName + " " + firstName);
        $('#jumbo').show();
        
        return false;
    });
});