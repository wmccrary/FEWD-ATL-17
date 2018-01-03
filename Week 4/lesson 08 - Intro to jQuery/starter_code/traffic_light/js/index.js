
//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {
	//alert('Hello World!');
$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);
//**NOTE** Ask the question, Listen for a .CLICK on the BUTTON and do THIS FUNCTION


function illuminateRed() {
	clearLights();
	$('#stopLight').css('background', 'red');
	//***Note***  First line defines the funtion/second line calls CLEARLIGHT FUNCTION/Third line is the function
}
function illuminateYellow() {
	clearLights();
	$('#slowLight').css('background', 'yellow');
}	
function illuminateGreen() {
	clearLights();
	$('#goLight').css('background', 'green');
}

function clearLights(){
	$('#traffic-light div').css('background', 'black')
}


});