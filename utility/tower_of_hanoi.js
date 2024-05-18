// Main
let ctx = document.querySelector("canvas").getContext("2d");
let size = 5;
width =  20;
height = 400;
time_delay = 100;
size = 4;
init();
// Utility

function init() {
    s = [4, 3, 2, 1];
    d = [];
    h = [];
    stepsToSolveHanoiT(size, s, h, d);
    console.log(s);
    console.log(h);
    console.log(d);
}


async function stepsToSolveHanoiT(size, s, h, d) {
    if (size >= 1) {

        // Move a tower of height-1 to the buffer peg, using the destination peg.
        stepsToSolveHanoiT(size - 1, s, d, h);

        // Move the remaining disk to the destination peg.
           d.push(s[s.length - 1]);
           s.pop();
        // Move the tower of `size-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
        stepsToSolveHanoiT(size - 1, h, s, d);
      }
      
      return;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}