main.js upcoming.js and past.js

1. The function getData() is called.
2. The function getData() declares a variable called template and assigns it an empty string value.
3. The function getData() starts a for loop that will run as many times as there are elements in the arrayEvents array.
4. The function getData() adds to the template variable the HTML code that will be used to display each event in the arrayEvents array.
5. The function getData() assigns to the innerHTML property of the card element the value of the template variable, which contains all the HTML code needed to display all events in the arrayEvents array.

details.js

 1. The code is a function that takes the id of an event and displays it in the page.
2. It first gets the id from the url and stores it in a variable called id.
3. Then it looks for an event with that id in the details array and stores it in a variable called item.
4. Then it gets the container div from the html page and stores it in a variable called div.
5. Then it changes the inner html of that div to display all the information about that event, including its image, name, description and a button to go back to the previous page.
