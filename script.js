//stores lolcat message
var messageText;

//stores Party Time label message
var buttonMessage;

//initial values for time events
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 3PM
var isPartyTime = false;

//party time button
var partyTimeButton = document.getElementById("partyTimeButton");

//dynamic time
var time = new Date().getHours();

//drop down time selectors
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

// One second in Javascript
var oneSecond = 1000; 

//functions to change event times based on drop down selected
var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function()
{
    napTime = napTimeSelector.value;
};

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
      buttonMessage = "Party Over";
      // color of the button should be "#0A8DAB" (bonus!)
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
      buttonMessage = "PARTY TIME!";
      // color of the button should be "#222" (bonus!)
      partyTimeButton.style.backgroundColor = "#222";
   }
   //this line rewrites the text inside of button
   partyTimeButton.innerText = buttonMessage;
};

var showCurrentTime = function()
{
  // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

var updateClock = function() 
{
  // connect HTML to JS. HTML message ID = clock
  var messageJS = document.getElementById("timeEvent");
  // HTML image ID is lolcatImage
  var  lolcatImageJS = document.getElementById('lolcatImage');
  // default image
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  // the rest of the LOLCat code you wrote up until this step
  if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  } else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  } else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  } else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  } else if (time < noon) {
    messageText = "Good morning!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  } else if (time > evening) {
    messageText = "Good Evening!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  } else {
    messageText = "Good afternoon!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  }

  //this line rewrites the text inside of HTML
  messageJS.innerText = messageText;
  // connect JS to HTML image ID
  lolcatImageJS.src = image;

  showCurrentTime();
};

//time update interval
setInterval(updateClock, oneSecond);

//listeners
partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);
