// Array declarations and creation

let arr = [];

let waste = [
    {
        name: 'radix sort',
        link: `radix.html`
    },
    {
        name: 'shell sort',
        link: `shell.html`
    }
]
let size = 20;
let max = 100;
let time_delay = 10;
let grid_width = 800;
let grid_height = 440;
var grid = document.querySelector('.grid');	
for(let i=0; i<arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}

function create_grid() {
    document.querySelector(".grid").innerHTML = '';		
    arr.forEach((e, i) => {
        createEl(e, i);
    })	
}

function randomize_an_array() {
    arr = [];
    for(let i=0; i<size; i++) {
        arr.push(Math.floor(Math.random() * max + 1));
    }
    create_grid();
}

// Utility functions

function wait(ms) {
    const end = Date.now() + ms;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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


// Menu driven
function menu(option) {
    switch(option) {
        case 1: document.querySelector('.heading').innerText = 'Bubble Sort';
                bubble_sort();
                break;
        case 2: document.querySelector('.heading').innerText = 'Selection Sort';
                selection_sort();
                break;
        case 3: document.querySelector('.heading').innerText = 'Insertion Sort';
                insertion_sort();
                break;
        case 4: document.querySelector('.heading').innerText = 'Merge Sort';
                merge_sort();
                break;
        case 5: document.querySelector('.heading').innerText = 'Quick Sort';
                quick_sort();
                break;
        case 6: document.querySelector('.heading').innerText = 'Radix Sort';
                radix_sort();
                break;
        case 7: document.querySelector('.heading').innerText = 'Shell Sort';
                shell_sort();
                break;
        case 8: document.querySelector('.heading').innerText = 'Counting Sort';
                counting_sort();
                break;
        case 9: document.querySelector('.heading').innerText = 'Heap Sort';
                heap_sort();
                break;
        default: merge_sort();
    }
}

// Sorting functions 

async function bubble_sort() {
    for(let i=size-1; i > 0; --i) {
        for(let j=0; j < i; j++) {
                await sleep(time_delay).then(() => {
                    if(arr[j] > arr[j+1]) {
                        swapEl(j, j+1)
                        // console.log(j, j+1);
                    }
                    else {
                        var p = document.querySelectorAll('.rect');
                        p[j].style.background = 'white';
                        p[j + 1].style.background = 'red';
                    }
                });
                // console.log(j, j+1);
                
        }	
    }
    var p = document.querySelectorAll('.rect');
    p[0].style.background = 'red';
}


async function selection_sort() {
    var p = document.querySelectorAll('.rect');
    for(let i=0; i < size; ++i) {
        let j=i;
        let temp = arr[i]; 
        let pos = i;
        p[pos].style.background = 'red';
        while(j < size) {
            if(temp > arr[j]) {
                temp = arr[j];
                pos = j;
            }
            await sleep(time_delay).then(() => {
                p[pos].style.background = 'red';
            })
            j++;
        }
        await sleep(time_delay).then(() => {
            if(pos != i) {
                swapEl(pos, i);
                // console.log(i, j)				
            }				
        })	

    }
}

function insertion_sort() {

}

function merge_sort() {

}

function quick_sort() {

}

function radix_sort() {

}

function shell_sort() {

}

function counting_sort() {

}

function heap_sort() {

}



// Sort options 

var option = 1;
document.querySelector(".sort_option").addEventListener("change", (e) => {
    option = +e.target.value;
    randomize_an_array();
    menu(option);
})


// Randamize Array

document.querySelector('.random__button').addEventListener("click", (e) => {
        randomize_an_array();
        menu(option);
})

document.querySelector('.delay__time').addEventListener("click", (e) => {
        if(+e.target.value == time_delay) {

        }
        else{
            let a = +e.target.value
            console.log(a);
            randomize_an_array();
            time_delay = a;
            menu(option);
        }
})


// Main 

randomize_an_array();
create_grid();
menu(option);



// Animation On Read More
let read_click = document.querySelector(".circular__read");
read_click.addEventListener("click", (e) => {


})