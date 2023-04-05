/*
This function gets the current time from the user's device and displays it on a web page as a digital clock.
*/
function showTime(){
    // Create a new Date object to get the current time from the user's device.
    var date = new Date();
    // Get the current hour (in 24-hour format) from the Date object.
    var h = date.getHours(); // 0 - 23
    // Get the current minute from the Date object.
    var m = date.getMinutes(); // 0 - 59
    // Get the current second from the Date object.
    var s = date.getSeconds(); // 0 - 59
    // Set the default session to "AM".
    var session = "AM";
    
    // If the hour is equal to 0, set it to 12.
    if(h == 0){
        h = 12;
    }
    
    // If the hour is greater than 12, subtract 12 from it and set the session to "PM".
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    // Add leading zeroes to the hour, minute, and second values if they are less than 10.
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    // Combine the hour, minute, second, and session values into a string and store it in the time variable.
    var time = h + ":" + m + ":" + s + " " + session;
    // Set the text content of the HTML element with the ID "clock" to the time variable.
    document.getElementById("clock").innerText = time;
    // Set the text content of the HTML element with the ID "clock" to the time variable (for older versions of Internet Explorer).
    document.getElementById("clock").textContent = time;
    
    // Call the showTime function again after 1000 milliseconds (i.e., 1 second).
    setTimeout(showTime, 1000);
}

// Call the showTime function to start the clock.
showTime();
