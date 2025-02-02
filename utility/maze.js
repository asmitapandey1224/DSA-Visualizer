// Main
let arr =[];
let size = 20;
time_delay = 0;
let ctx = document.querySelector("canvas").getContext("2d");
let per_width = ctx.canvas.width / size;
let per_height = ctx.canvas.height / size;
let stack = [];
init();	
draw_grid();
dfs(0, 0);	
// Utility
function init() {
    for(let i = 0; i<size ; i++) {
        let temp = [] 
        for(let j = 0; j<size; j++) {
            temp.push({
                walls: [true, true, true, true],
                visited: false
            });
        }
        arr.push(temp);
    }

}

async function createLine(x1, y1, x2, y2, color, width=2) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(per_width * (x1), per_height * (y1));
    ctx.lineTo(per_width * (x2), per_height * (y2));
    ctx.stroke();
    ctx.closePath();

}

function createRect(i, j) {
    ctx.fillStyle = "purple";
    ctx.fillRect(per_width * i, per_height * j, per_width, per_height);
}

function draw_grid() {
    visited_color = "purple";
    for(let i = 0; i<size; i++) {
        for(let j = 0; j<size; j++) {					
                if(!arr[i][j].visited) ctx.fillStyle = "black";	
                else ctx.fillStyle = visited_color;
                ctx.fillRect(per_width * i, per_height * j, per_width, per_height);

                if(arr[i][j].walls[0]) {
                    createLine(i, j, i + 1, j, "white", 3)
                } else {
                    createLine(i, j, i + 1, j, visited_color, 3)
                }

                if(arr[i][j].walls[1]) {
                    createLine(i + 1, j, i + 1, j + 1, "white", 3);
                } else {
                    createLine(i + 1, j, i + 1, j + 1, visited_color, 3);
                }

                if(arr[i][j].walls[2]) {
                    createLine(i + 1, j + 1, i, j + 1, "white", 3);
                } else {
                    createLine(i + 1, j + 1, i, j + 1, visited_color, 3);
                }

                if(arr[i][j].walls[3]) {
                    createLine(i, j + 1, i, j, "white", 3)
                } else {
                    createLine(i, j + 1, i, j, visited_color, 3);
                }

                
        }
    }
}

async function dfs(x, y) {
    
    let width = 2;
    if(x < 0 || x >= size || y < 0 || y >= size) return;
    arr[x][y].visited = "true";
    // await sleep(time_delay).then(() => {
        createRect(x, y);
        visited_color = "purple";
        i = x;
        j = y;
        if(arr[i][j].walls[0]) {
            createLine(i, j, i + 1, j, "white", width)
        } else {
            createLine(i, j, i + 1, j, visited_color, width)
        }

        if(arr[i][j].walls[1]) {
            createLine(i + 1, j, i + 1, j + 1, "white", width);
        } else {
            createLine(i + 1, j, i + 1, j + 1, visited_color, width);
        }

        if(arr[i][j].walls[2]) {
            createLine(i + 1, j + 1, i, j + 1, "white", width);
        } else {
            createLine(i + 1, j + 1, i, j + 1, visited_color, width);
        }

        if(arr[i][j].walls[3]) {
            createLine(i, j + 1, i, j, "white", width)
        } else {
            createLine(i, j + 1, i, j, visited_color, width);
        }
    // })
    exclude = new Set();
    include = new Set();
    let p;
    while(exclude.size + include.size != 4) {
        p = Math.floor(Math.random() * (4 + 1 - 1) + 1);
        if(exclude.has(p)) {
        }
        else if(p == 1) {
            if(x < size - 1 && !arr[x + 1][y].visited) {
                include.add(1)
            } else {
                exclude.add(1);
            }
        }
        else if( p == 2) {
            if(y < size - 1 && !arr[x][y + 1].visited) {
                include.add(2)
            } else {
                exclude.add(2);
            }
        }
        else if( p == 3) {
            if(x > 0 && !arr[x - 1][y].visited) {
                include.add(3)
            } else {
                exclude.add(3);
            }
        }
        else {
            if(p == 4 && y > 0 && !arr[x][y - 1].visited) {
                include.add(4)
            } else {
                exclude.add(4);
            }
        }

    }
    
    if(include.size > 0) {
        let arena = [];
        include.forEach(e => arena.push(e));
        let t = Math.floor(Math.random() * (arena.length - 0) - 0)
        p = arena[t];
        m = arena.filter((e, i) => {
            return i != t;
        })
        if(m.length > 0) {
            stack.push([x, y])
        }

    }
    if(exclude.size == 4) {	
        if(stack.length == 0) return;
        let tt = stack.pop();
        await dfs(tt[0],tt[1]);
    }

    else if( p == 1 && x < size - 1 && !arr[x + 1][y].visited) {
        arr[x][y].walls[1] = false;
        arr[x + 1][y].walls[3] = false;
        await createLine(x + 1, y, x + 1, y + 1,"purple", width);
        await dfs(x + 1, y);			
    }

    else if( p == 2 && y < size - 1 && !arr[x][y + 1].visited) {
        arr[x][y].walls[2] = false;
        arr[x][y + 1].walls[0] = false;
        await createLine(x, y + 1, x + 1, y + 1, "purple", width);
        await dfs(x, y + 1);		
    }

    else if( p == 3 && x > 0 && !arr[x - 1][y].visited) {
        arr[x][y].walls[3] = false;
        arr[x - 1][y].walls[1] = false;
        await createLine(x, y, x, y + 1, "purple", width);
        await dfs(x - 1, y);		
    }

    else if( p == 4 && y > 0 && !arr[x][y - 1].visited) {
        arr[x][y].walls[0] = false;
        arr[x][y - 1].walls[2] = false;		
        await createLine(x, y, x + 1, y, "purple", width);
        await dfs(x, y - 1);		
    }
    
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
