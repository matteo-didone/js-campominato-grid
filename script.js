// The user clicks on the button "Play"
// That will generate a square game grid
// Each cell has a progressive number from 1 to 100
// There will be 10 cells for each of the 10 rows
// When the user clicks on each cell, the clicked cell turns blue, and a message is emitted in the console with the number of the clicked cell. 

// BONUS: 
// for difficulty 1 => 100 cells, with a number ranging from 1 to 100, divided into 10 cells per 10 rows;
// for difficulty 2 => 81 cells, with a number ranging from 1 to 81, divided into 9 cells per 9 rows;
// for difficulty 3 => 49 cells, with a number ranging from 1 to 49, divided into 7 cells per 7 rows.

// The play button is stored into a JS variable
const playButton = document.getElementById('btn-play');
// The selector is stored into a JS variable
const selector = document.getElementById('difficulty');
// The difficulty options need to be stored into a JS variable too
const difficultyOne = document.getElementById('difficulty-one');
const difficultyTwo = document.getElementById('difficulty-two');
const difficultyThree = document.getElementById('difficulty-three');

// Add click event listener to the play button
playButton.addEventListener('click', function() 
{
    // Get the selected difficulty level
    const difficultyString = selector.value;
    const difficultyLevel = parseInt(difficultyString.match(/\d+/) || 0);;

    // Generate the game grid based on the selected difficulty level
    generateGrid(difficultyLevel);
});

// Game grid function method
function generateGrid(difficultyLevel) 
{
    // The game grid is generated
    const grid = document.getElementById('grid');
    // Clear the grid
    grid.innerHTML = '';

    // Define the number of cells and rows based on the difficulty level
    let numCells, numRows;
    if (difficultyLevel === 1) 
    {
        numCells = 100;
        numRows = 10;
    } 
    else if (difficultyLevel === 2) 
    {
        numCells = 81;
        numRows = 9;
    } 
    else if (difficultyLevel === 3) 
    {
        numCells = 49;
        numRows = 7;
    }

    // Calculate the number of cells per row
    const numCellsPerRow = numCells / numRows;

    // Create rows
    for (let i = 0; i < numRows; i++) 
    {   
        // Create a row element
        const row = document.createElement('div');
        // Add row class to the row element
        row.classList.add('row');

        // Create cells for each row
        for (let j = 0; j < numCellsPerRow; j++) 
        {
            // Create a cell element
            const cell = document.createElement('div');
            // Add cell class to the cell element
            cell.classList.add('cell');
            // Add text to the cell
            cell.innerText = i * numCellsPerRow + j + 1;
            // Append the cell to the row
            row.appendChild(cell);

            // Add click event listener to each cell
            cell.addEventListener('click', function() 
            {
                // Add 'clicked' class to the cell
                cell.classList.toggle('clicked');
                // Print the clicked cell text to the console
                console.log(cell.innerText);
            });
        }

        // Append the row to the grid
        grid.appendChild(row);
    }
}