let startTime, updateTime, difference, interval;
let running = false;
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn  = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
function startStopwatch()
{
	if(!running)
	{
	    startTime = new Date().getTime() - (difference || 0);
	    interval = setInterval(updateDisplay,1000);
	    running = true;
	}
}
function stopStopwatch()
{
	clearInterval(interval);
	running = false;
}
function resetStopwatch()
{
	clearInterval(interval);
	running = false;
	difference = 0;
	display.innerHTML = "00:00:00";
}
function updateDisplay()
{
	updatedTime = new Date().getTime();
	difference = updatedTime - startTime;
  	let hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));
  	let minutes = Math.floor((difference%(1000*60*60))/(1000*60));
  	let seconds = Math.floor((difference%(1000*60))/(1000));
	display.innerHTML = hours + ':' + minutes + ':' + seconds;
}
startBtn.addEventListener("click",startStopwatch);
stopBtn.addEventListener("click",stopStopwatch);
resetBtn.addEventListener("click",resetStopwatch);










