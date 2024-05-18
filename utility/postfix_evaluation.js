// Main
let ctx = document.querySelector("canvas").getContext("2d");
let time_delay = 1000;
let str = "ab/*+-";
let priority = {
    "(": 0, 
    "+": 1,
    "-": 1,
    "/": 2,
    "*": 2,
    "^": 3
}
init();
// Utility

function init() {
    add_listeners();
}

// TESTCASE ((a+b)/(a-b)/(a*b))
function add_listeners() {
    document.querySelector(".evaluate").addEventListener("click", () => {
        val = document.querySelector(".number").value;
        
        // FILTERING THE STRING
        if(val.length > 20 || val.length <= 0){
            alert("keep the length of expression less then 21 and greater than 0");
            return;
        }
        for(let i=0; i<val.length; i++) {
            let count = 0;
            for(let j =0; j<str.length; j++) {
                if(val[i] == str[j]) {
                    count++; break;
                }
            }
            if(count == 0) {
                alert("Unknown symbol detected");
                return;
            }
        }
        document.querySelector(".evaluate").disabled = true;
        postfixEval(val);
    })
}

async function postfixEval(val) {
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}