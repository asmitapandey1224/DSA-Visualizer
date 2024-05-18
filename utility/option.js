// Main
let grid = document.querySelector('.grid');
let algo = [
    {
        name: 'Linear Search',
        link: `search_algorithms/linear.html`
    },
    {
        name: 'Binary Search',
        link: `search_algorithms/binary.html`
    },
]
init();

// Utility function 

function init() {
    algo.forEach((e, i) => {
        let html = `
                <a href="${e.link}" class="algo__link">${e.name}</a>
        `
        let algo = document.createElement('div');
        algo.classList.add('algo');
        algo.innerHTML = html;
        grid.appendChild(algo);
    })
}