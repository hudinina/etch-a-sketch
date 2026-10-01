const container = document.querySelector('#container');
const topBar = document.querySelector('#topBar');

// create Reset Sketchpad button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Sketchpad';
resetButton.classList.add('resetButton');
topBar.appendChild(resetButton);

function createInitial() {
    for(let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        
        // add hover effect
        square.addEventListener('mouseenter', () => {
            square.classList.add('hoverEffect');
        });

        square.addEventListener('animationend', () => {
            square.classList.remove('hoverEffect');
        })
    };
};

// create reset button function to delete squares
resetButton.addEventListener("click", () => {
    const gridSize = prompt('How many squares per side do you want for your new sketchpad? Enter a number no larger than 100.','');
    if (gridSize === null) {
        return;
    } else if (gridSize < 1 || gridSize > 100 || !Number.isInteger(+gridSize)) {
        alert('Please enter a number no larger than 100');
        return;
    } else {
        container.replaceChildren();
    
        container.style.setProperty('--grid-size', gridSize);

        function createNew() {
            for (let i = 0 ; i < (gridSize)**2 ; i++) {
                const newSquare = document.createElement('div');
                newSquare.classList.add('square');
                container.appendChild(newSquare);

                // add hover effect
                newSquare.addEventListener('mouseenter', () => {
                    newSquare.classList.add('hoverEffect');
                });

                newSquare.addEventListener('animationend', () => {
                    newSquare.classList.remove('hoverEffect');
                });          
            
                console.log(newSquare);
            };
        };

        createNew();
        
    };
});

