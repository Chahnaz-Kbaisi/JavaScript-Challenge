// Level 2: Multiple Search Categories (Optional)

// Complete all of Level 1 criteria.

// Using multiple `input` tags and/or select dropdowns, 
// write JavaScript code so the user can to set multiple filters 
// and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`


// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Data columns
var columns = ["datetime", "city", "state", "shape", "durationMinutes", "comments"]


// Advanced Search Panel
