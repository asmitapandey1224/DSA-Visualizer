// Main

let arr = [];

let size = 50;
let max = 200;
let time_delay = 10;
let grid_width = 800;
let grid_height = 440;
var grid = document.querySelector('.grid');	
initiate_process();
randomize_an_array();
create_grid();
bubble_sort();
// read_more_animate();

// Utility functions

function createEl(e, i) {
    var p = document.createElement('div');
    p.classList.add('rect');
    p.style.background = 'white';
    p.style.height = `${(e * (grid_height / max))}px`;
    p.style.width = `${grid_width / size}px`;
    p.style.position = 'absolute';
    p.style.bottom = '0px';
    p.style.borderRadius = '20px 20px 0 0 ';
    p.style.border = '1px solid black';	
    p.style.left = '0px';
    p.style.transform = `translateX(${i*(grid_width/size)}px)`
    p.style.transition = '100ms linear';
    grid.appendChild(p);
}


function swapEl(i, j) {
    var p = document.querySelectorAll('.rect');
    let m = p[i];
    let n = p[j];
    m.style.boxShadow = '-6px -10px 10px rgba(0, 0, 0, .2)';
    temp = m.style.height;
    m.style.height = n.style.height;
    n.style.height = temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    m.style.background = 'white';
    n.style.background = 'red';
    
}

function create_grid() {
    document.querySelector(".grid").innerHTML = '';		
    for(let i=0; i<arr.length; i++) {
        createEl(arr[i], i);
    }
}


function randomize_an_array() {
    arr = [];
    for(let i=0; i<size; i++) {
        arr.push(Math.floor(Math.random() * max + 1));
    }
    create_grid();
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function menu() {
    bubble_sort();
}

function initiate_process() {

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    document.querySelector('.random__button').addEventListener("click", (e) => {
            randomize_an_array();
            menu();
    })

    document.querySelector('.delay__time').addEventListener("click", (e) => {
            if(+e.target.value == time_delay) {

            }
            else {
                let a = +e.target.value
                console.log(a);
                randomize_an_array();
                time_delay = a;
                menu();
            }
    })

    document.querySelector('.size').addEventListener("click", (e) => {
            if(+e.target.value == size) {

            }
            else {
                let a = +e.target.value
                console.log(a);
                size = a;
                randomize_an_array();
                menu();
            }
    })
}

function read_more_animate() {
    let read_click = document.querySelector(".circular__read");
    read_click.addEventListener("click", (e) => {


    })
}


// Sorting functions 

async function bubble_sort() {
    for(let i=size-1; i > 0; --i) {
        for(let j=0; j < i; j++) {
                await sleep(time_delay).then(() => {
                    if(arr[j] > arr[j+1]) {
                        swapEl(j, j+1)
                    }
                    else {
                        var p = document.querySelectorAll('.rect');
                        p[j].style.background = 'white';
                        p[j + 1].style.background = 'red';
                    }
                });
                
        }	
    }
    var p = document.querySelectorAll('.rect');
    p[0].style.background = 'red';
}