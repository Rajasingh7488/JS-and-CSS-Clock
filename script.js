const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	
	const secondInDegrees = ((seconds/60) * 360) + 90;
	console.log(seconds)
	// console.log('secondInDegrees:', secondInDegrees);
	secondHand.style.transform = `rotate( ${secondInDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesInDegree = ((minutes/60 ) * 360) +90;
	// console.log('minutes:', minutes);
	// console.log('minutesInDegree:', minutesInDegree);
	minuteHand.style.transform = `rotate(${minutesInDegree}deg)`;

	const hours = now.getHours();
	const hoursInDegree = ((hours/12) * 360) +90;
	hourHand.style.transform = `rotate(${hoursInDegree}deg)`;
 
 // this section is to avoid the hands when they reach at 12 they take a complete backround to reach 01 and with
 // transition 0.05 second it is easily visible.
	
	if(seconds< "1") {
	secondHand.classList.add('notransition');
 	}
	else if(seconds >='1') {
 	secondHand.classList.remove('notransition');
 	}
 	else return;
 	}

 
 	
 

setInterval(setDate, 1000); //This runs the js(setDate) in every 1 second or 1000milliseconds
