let screen = document.querySelector('#screen')

function insert(num) {
    screen.innerHTML += num
}

function clean() {
    screen.innerHTML = ""
}

function del() {
    screen.innerHTML = screen.innerHTML.slice(0, -1) 
}

function calc() {
    try {
        let result = eval(screen.innerHTML);
        screen.innerHTML = result;
    } catch (error) {
        screen.innerHTML = 'ERROR';
        setTimeout(() => {
            screen.innerHTML = '';
        }, 1500);
    }
}
