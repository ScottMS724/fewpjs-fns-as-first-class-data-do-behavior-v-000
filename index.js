/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let timeArray = timeString.split();
    if (timeArray[0] < 12)
      return "Good Morning";
    elsif (timeArray[0] == 12 || 13 || 14 || 15 || 16 || 17);
      return "Good Afternoon";
    elsif (timeArray[0] > 17);
      return "Good Evening";
}



/* Write your implementation of displayMessage() */
