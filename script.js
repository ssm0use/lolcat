//stores lolcat message
var messageText;
//stores Party Time label message
var buttonMessage;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");

// One second in Javascript
var oneSecond = 1000; 

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
      buttonMessage = "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
      buttonMessage = "PARTY TIME!"
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
  //dynamic time
  var time = new Date().getHours();
  //for a time for test
  //var time = 17;
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
  } else if (time == wakeupTime) {
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

setInterval(updateClock, oneSecond);
partyTimeButton.addEventListener("click", partyEvent);
