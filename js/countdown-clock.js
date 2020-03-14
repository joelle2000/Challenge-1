// this is the date the clock is counting down to
var countDownDate = new Date("Nov 18, 2020 13:00:00").getTime();

// update the count down every 1 second
var x = setInterval(function() {

	// gets today's date and time
	var now = new Date().getTime();
						    
	// finds the time difference between now and the count down date
	var distance = countDownDate - now;
						    
	// these are the time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
						    
	// this shows the count down clock at the paragraph woth the id count-down 
	document.getElementById("count-down").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
						    
	// when the count-down is over they shoul have arrived and it will display the text You arrived
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "You arrived";
	} 
}, 1000);