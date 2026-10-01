const container = document.querySelector('#container');
const topBar = document.querySelector('#topBar');

// create Reset Sketchpad button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Sketchpad';
resetButton.classList.add('resetButton');
topBar.appendChild(resetButton);

// function to create grid
function createGrid(size) {
    for(let i = 0; i < size**2 ; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        
        // add hover effect
        square.addEventListener('mouseenter', () => {
            square.classList.add('hoverEffect');
        });

        square.addEventListener('animationend', () => {
            square.classList.remove('hoverEffect');
        });

        // add click interation to make square change to random color
        let click = 0;
        let r, g, b;

        square.addEventListener('click', () => {
            if (click === 0) {
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
            };
            
            click++;
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${click / 10})`;
            
            if (click === 10) click = 0;
        });
    };
};

createGrid(16);

// reset button function
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
        createGrid(gridSize);
    };
});

