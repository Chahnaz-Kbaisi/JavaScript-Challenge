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



// Advanced Search Panel

// // from data.js
// var tableData = data;

// // YOUR CODE HERE!
// var tbody = d3.select("tbody");

// // Data columns
// // var columns = ["datetime", "city", "state", "shape", "durationMinutes", "comments"]

// console.log(tableData);

// buildTables(tableData);



// function buildTables(ufoData) {
//     tbody.html("")
//     // Looping throught each UFO Object in the data array
//     // Adding the table data of UFO Sightings when loading the page
//     ufoData.forEach((ufoSightings) => {
//         console.log(ufoSightings);
//         var row = tbody.append("tr");
//         // Using the Object.entries to console.log to populate each UFO Sighting object:
//         Object.entries(ufoSightings).forEach(([key, value]) => {
//             console.log(key, value);
//             // Appending a cell to the row for each value
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// };




// // Select the button
// var button = d3.select("#filter-btn");

// // Button to return to full table
// var fullTable = d3.select("full-btn");

// // Select the form
// var form = d3.select("form");
// fullTable.on("click", function(){
//     ufoData()
// })

// // Create event handler
// button.on("click", runEnter);
// form.on("submit", runEnter);

// // complete the event handler from refresing
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.selectAll(".form-control");
//     // var filterList = [];
//     // var filterFields = [];
//     // Get the value property of hte input element
//     for (i = 0; i < inputElement.length; i++) {
//         if (filteredData.length === 0) {
//             tbody.text(`no matching for ${inputValue}.`);
//         }
//         else {
//             var inputValue = inputElement[i].property("value");
//             var inputField = inputElement[i].attr("id");
//             // filterList.append(inputValue)
//             // filterFields.append(inputField)
//             console.log(inputValue);
//             var filteredData = filteredData.filter((sighting) => sighting[inputField] === inputValue);
//             console.log(filteredData);
//         };
//     };

//     buildTables(filteredData);



    // var inputValueCity = d3.select("#city").property("value");
    // var inputValueState = d3.select("#state").property("value");
    // var inputValueCountry = d3.select("#country").property("value");
    // var inputValueShape = d3.select("shape").property("value");

    // Use the form input to filter the data by datetime
    // var filteredData = tableData.filter((sighting) => sighting.datatime === inputValue);
    // var filteredData = filteredData.filter((sighting) => sighting.city === inputValueCity);
    // var filteredData = filteredData.filter((sighting) => sighting.state === inputValueState);
    // var filteredData = filteredData.filter((sighting) => sighting.country === inputValueCountry);
    // var filteredData = filteredData.filter((sighting) => sighting.shape === inputValueShape);



    //     var filteredData = tableData.filter((sighting) => sighting.datetime === inputValue ||
    //         sighting.city === inputValue ||
    //         sighting.state === inputValue ||
    //         sighting.country === inputValue ||
    //         sighting.shape === inputValue);
    //     console.log(filterData);

    //     // Clear out current contents in the table
    //     tbody.html("");

    //     // If results have no match
    //     if (filteredData.length === 0) {
    //         tbody.text(`no matching for ${inputValue}.`);
    //     }
    //     else {
    //         // filteredData.forEach((ufoSightings) => {
    //         //     var row = tbody.append("tr");
    //         //     Object.entries(ufoSightings).forEach(([key, value]) => {
    //         //         cell.text(value);
    //         //     });
    //         // });
    //     };
};


