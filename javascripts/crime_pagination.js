var $tbody = document.querySelector("tbody");
var $loadMoreBtn = document.querySelector("#load-btn");

$loadMoreBtn.addEventListener("click", handleLoadMoreDataClick);


// Set a startingIndex and resultsPerPage variable
var startingIndex = 0;
var resultsPerPage = 20;

var filteredDataSet = crime_data;

// renderTable renders the filteredAddresses to the tbody
function renderTableSection() {
  // Set the value of endingIndex to startingIndex + resultsPerPage
  var endingIndex = startingIndex + resultsPerPage;
  // Get a section of the addressData array to render
  var dataSubset = filteredDataSet.slice(startingIndex, endingIndex);
  for (var i = 0; i < dataSubset.length; i++) {
    // Get get the current address object and its fields
    var rowData = dataSubset[i];
    var fields = Object.keys(rowData);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i + startingIndex);

    var $stateCell = $row.insertCell(0)
    $stateCell.innerText = rowData["State"]
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      if (field.toLowerCase() != "state") {
        var $cell = $row.insertCell(j+1);
        $cell.innerText = rowData[field];  
      }
    }
  }
  // Done
  console.log("Done rendering table")
}

function handleLoadMoreDataClick() {
  // Increase startingIndex by 100 and render the next section of the table
  startingIndex += resultsPerPage;
  renderTableSection();
  // Check to see if there are any more results to render
  if (startingIndex + resultsPerPage >= filteredDataSet.length) {
    $loadMoreBtn.classList.add("disabled");
    $loadMoreBtn.innerText = "All data Loaded";
    $loadMoreBtn.removeEventListener("click", handleLoadMoreDataClick);
  }
}

renderTableSection();
