// Main
let ctx = document.querySelector("canvas").getContext("2d");
let size = 10;
let w = [];
let v = [];
let weight = [];
let per_width = ctx.canvas.width / size;
let per_height = ctx.canvas.height / size;
init();	
// Utility

function init() {
    init_array();
    draw_arr();
    add_listeners();
}

function init_array() {
    min_weight = 1;
    max_weight =  10;
    min_value = 1;
    max_value = 50;

    for(let i=0; i<size; i++) {
        w.push(Math.floor(Math.random() * (max_weight + 1 - min_weight) + (min_weight)));
        v.push(Math.floor(Math.random() * (max_value + 1 - min_value) + (min_value)));
    }
}

function add_listeners() {
    document.querySelector(".calc").addEventListener("click", () => {
        weight = +document.querySelector(".number").value;
        if(weight > 10 || weight < 0) {
            alert("keep weight between 0 and 10");
        }
        else {
            knapsack();
        }
    })
}

function draw_arr() {
    let pw = per_width * (size / (size + 1));
    let height = 50;
    
    ctx.fillStyle = "red";
    ctx.fillRect(0, ctx.canvas.height - height, per_width, height);
    ctx.fillStyle = "white";
    ctx.font = "bolder 15px arial";
    ctx.fillText("Weight", pw / 2 - 20, ctx.canvas.height - height / 2 + 5);
    
    ctx.fillStyle = "red";
    ctx.fillRect(0, ctx.canvas.height - 2 * height - 1, per_width, height);
    ctx.fillStyle = "white";
    ctx.font = "bolder 15px arial";
    ctx.fillText("Value", pw / 2 - 20, ctx.canvas.height - 2 * height / 2 - 20);

    for(let i=0; i<size; i++) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(pw * (i + 1), ctx.canvas.height - height, per_width, height);
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.strokeRect(pw * (i + 1), ctx.canvas.height - height, per_width, height)
        ctx.font = "bolder 15px arial";
        ctx.fillText(w[i], pw * (i + 1) +  pw / 2 - 20, ctx.canvas.height - height / 2 + 5);
        
        ctx.fillStyle = "black";
        ctx.fillRect(pw * (i + 1), ctx.canvas.height - 2 * height - 1, per_width, height);
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.strokeRect(pw * (i + 1), ctx.canvas.height - 2 * height - 1, per_width, height)
        ctx.font = "bolder 15px arial";
        ctx.fillText(v[i], pw * (i + 1) + pw / 2 - 20, ctx.canvas.height - 2 * height / 2 - 20);
        ctx.closePath();
    }
}

function knapsack() {
    alert(1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}