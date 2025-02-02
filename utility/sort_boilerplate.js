// Main
let ctx = document.querySelector("canvas").getContext("2d");
let size = 30;
let arr = [];
let max = 50;
let time_delay = 200;


init();
// Utility

function initialize_array() {
    let min = 10;
    for(let i=0; i<size; i++) {
        let p = Math.floor(Math.random() * (max - min) + min);
        arr.push(p);
    }
}

async function animation(color) {
    ctx.fillStyle = "rgb(27, 67, 98)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let pw = ctx.canvas.width / size;
    for(let i=0; i<size; i++) {
        ctx.beginPath();

        ctx.fillStyle = "black";
        if(i == color) {
                ctx.fillStyle = "red";
        }
        ctx.fillRect(i * pw, ctx.canvas.height  - (arr[i] * (ctx.canvas.height / max)), pw, arr[i] * (ctx.canvas.height / max));

        ctx.strokeStyle = "white";
        ctx.strokeRect(i * pw, ctx.canvas.height - (arr[i] * (ctx.canvas.height / max)), pw, arr[i] * (ctx.canvas.height / max));

        ctx.closePath();
    }
}

function init() {
    initialize_array();
    animation();
    add_listeners(-1)
}

function add_listeners() {
    document.querySelector("button").addEventListener("click", () => {
        sort();
    })
}

async function sort() {
    for(let i=0; i<size; i++) {
        for(let j=1; j<size-i; j++) {
            if(arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
            await sleep(time_delay).then(() => {
                animation(j);
            })
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}