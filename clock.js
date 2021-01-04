var wakeuptime = 5;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 1;
var stretchtime;
var evening = 17;

// Getting it to show the current time on the page
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "오전";

    // Set hours
    if (hours >= noon) {
        meridian = "오후";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime =meridian + " " + hours + ":" + minutes + ":" + seconds + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image =
        "https://www.petfoodindustry.com/ext/resources/Images-by-month-year/17_08/cat-business-money-market-computer.jpg?1545928182";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById("lolcatImage");

    if (time == stretchtime) {
        image =
            "https://i.redd.it/od4l9jd2ja921.jpg";
        messageText = "Stretch!";
    } else if (time == wakeuptime) {
        image =
            "https://i.imgur.com/PUqxPbeh.jpg";
        messageText = "Wake up!";
    } else if (time == lunchtime) {
        image =
            "https://bowwowinsurance.com.au/wp-content/uploads/2020/04/Persian-or-Chinchila-cat-eating-vegetable-in-owner-hand.jpg";
        messageText = "Let's have lunch!";
    } else if (time == naptime) {
        image =
            "https://images2.alphacoders.com/106/106110.jpg";
        messageText = "Sleep for the work!";
    } else if (time < noon) {
        image =
            "https://lh3.googleusercontent.com/proxy/DnrwJw63HTmLfMM50cPopmAUgxTO_AVfTw6lj-a5PNW8kRL3Ukk3FbHYylZhum3ms0M7FdTKg2taMLKYloHyzFcv1AXpak8H9D_KGPngFUhIeWAnZymbUDZKqs2-QLOm";
        messageText = "Morning work!";
    } else if (time >= evening) {
        image = "https://imgflip.com/s/meme/Cool-Cat-Stroll.jpg";
        messageText = "Go home!";
    } else {
        image =
            "https://www.petfoodindustry.com/ext/resources/Images-by-month-year/17_08/cat-business-money-market-computer.jpg?1545928182";
        messageText = "Afternoon work!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Stretch Time Button To Work
var stretchButton = document.getElementById("stretchTimeButton");

var stretchEvent = function () {
    if (stretchtime < 0) {
        stretchtime = new Date().getHours();
        stretchTimeButton.innerText = "Stretch Finish!";
        stretchTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        stretchtime = -1;
        stretchTimeButton.innerText = "Stretch Time!";
        stretchTimeButton.style.backgroundColor = "#222";
    }
};

stretchButton.addEventListener("click", stretchEvent);
stretchEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
//kkklol