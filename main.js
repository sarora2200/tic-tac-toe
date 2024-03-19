// Select the element with class 'title' to display game status
let title = document.querySelector('.title');
// Initialize the turn with 'x' as starting player
let turn = 'x';
// Initialize an array to store the game state
let squares = [];

// Function to end the game and display the winner
function end(num1, num2, num3) {
    // Display the winner in the title
    title.innerHTML = `${squares[num1]} is the winner`;
    // Highlight the winning squares with green color
    document.getElementById('item' + num1).style.backgroundColor = '#00ff00';
    document.getElementById('item' + num2).style.backgroundColor = '#00ff00';
    document.getElementById('item' + num3).style.backgroundColor = '#00ff00';

    // Add dots to the winner message every second
    setInterval(function() {
        title.innerHTML += '.';
    }, 1000);

    // Reload the page after 4 seconds to start a new game
    setTimeout(function() {
        location.reload();
    }, 4000);
}

// Function to check for a winner after each move
function winner() {
    // Loop through the game squares and store their values
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    // Check all possible winning combinations
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1, 2, 3); // Winning combination at top row
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        end(4, 5, 6); // Winning combination at middle row
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        end(7, 8, 9); // Winning combination at bottom row
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1, 4, 7); // Winning combination at left column
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        end(2, 5, 8); // Winning combination at middle column
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        end(3, 6, 9); // Winning combination at right column
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        end(1, 5, 9); // Winning combination at diagonal from top-left to bottom-right
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        end(3, 5, 7); // Winning combination at diagonal from top-right to bottom-left
    }
}

// Function to handle player moves
function game(id) {
    let element = document.getElementById(id);
    // Check if it's 'x' player's turn and the square is empty
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'x'; // Set 'x' in the square
        turn = 'o'; // Switch turn to 'o' player
        title.innerHTML = 'O'; // Update game status to show 'o' player's turn
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'o'; // Set 'o' in the square
        turn = 'x'; // Switch turn to 'x' player
        title.innerHTML = 'X'; // Update game status to show 'x' player's turn
    }
    winner(); // Check for a winner after each move
}
