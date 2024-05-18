// Main
let ctx = document.querySelector("canvas").getContext("2d");
let size = 10;
let arr = [];
let time_delay = 1000;


init();
// Utility
function init() {
    add_listeners()
}

function add_listeners() {

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}