// MAIN

arr = [];
var size = 10;
time_delay = 100;
var max = 100;
randomize_an_array();
createArray(arr);


// ARRAY ADT

async function createArray(arr) {
    let grid = document.querySelector('.grid');
    for(let e in arr) {
        await sleep(time_delay).then(() => {
            insertIntoArray(grid, arr[e])
        });
    }
}

async function insertIntoArray(grid, element) {
    let grid_child = document.createElement('span');
        await sleep(time_delay).then(() => {
            grid_child.style.display = 'flex';
            grid_child.style.justifyContent = 'flex-start'
            grid_child.style.alignSelf = 'center';
            grid_child.style.background = 'red';
            grid_child.style.border = '1px solid black';
            grid_child.style.borderRadius = '3px';
            grid_child.innerText = element;
            grid_child.style.fontFamily = 'ubuntu';
            grid_child.style.fontWeight = 'bolder';
            grid_child.style.fontSize = '20px';
            grid_child.style.padding = '25px';
            grid_child.style.fontSize = '20px';
            grid.appendChild(grid_child);

        })
        await sleep(time_delay).then(() => {
            grid_child.style.background = 'white';
        })
}

function deleteArrayElemet() {

}


// Utility function

function randomize_an_array() {
    arr = [];
    for(let i=0; i<size; i++) {
        arr.push(Math.floor(Math.random() * max + 1));
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}