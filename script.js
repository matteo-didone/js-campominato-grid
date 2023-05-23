// The user clicks on the button "Play"
const playButton = document.getElementById('btn-play');

playButton.addEventListener('click', function() 
{
    // The game grid is generated
    generateGrid();
});

function generateGrid() 
{
    // The game grid is generated
    const grid = document.getElementById('grid');
    // Clear the grid
    grid.innerHTML = '';

    // Create 10 rows
    for (let i = 0; i < 10; i++) 
    {   
        // Create a row element
        const row = document.createElement('div');
        // Add row class to the row element
        row.classList.add('row');

        // Create 10 cells for each row
        for (let j = 0; j < 10; j++) 
        {
            // Create a cell element
            const cell = document.createElement('div');
            // Add cell class to teh cell element
            cell.classList.add('cell');
            // Add text to the cell
            cell.innerText = i * 10 + j + 1;
            // Append the cell to the row
            row.appendChild(cell);

            // Add click event listener to each cell
            cell.addEventListener('click', function() 
            {
                // Add 'clicked' class to the cell
                cell.classList.add('clicked');
                // Print the clicked cell text to the console
                console.log(cell.innerText);
            });
        }

        // Append the row to the grid
        grid.appendChild(row);
    }
}


//That will generate a square game grid
//Each cell has a progressive number from 1 to 100
//There will be 10 cells for each of the 10 rows
//When the user clicks on each cell, the clicked cell turns blue, and a message is emitted in the console with the number of the clicked cell.