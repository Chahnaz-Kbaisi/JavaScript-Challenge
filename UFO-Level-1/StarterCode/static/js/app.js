// from data.js
var tableData = data;
// YOUR CODE HERE!

console.log(tableData);

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and 
// then adds new rows of data for each UFO sighting.

// Make sure you have a column for `date/time`, `city`, 
// `state`, `country`, `shape`, and `comment` at the very least.

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` 
// column to find rows that match user input.

// Get a reference to the table body
var tbody = d3.select("tbody");

// Looping through the UFO table values for each column
// Creating the empty rows for tableData
tableData.forEach((ufoSightings) => {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    // Using the Object.entries to console.log to populate each UFO Sighting object:
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);
        // Appending a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {



    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter((sighting) => sighting.datetime === inputValue);
    console.log(filteredData);

    // Adding tag
    tbody.html("");
}




