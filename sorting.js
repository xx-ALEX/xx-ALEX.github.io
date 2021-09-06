function priceUp() {
    let iPhone12 = document.querySelector('.iPhone12_container');
    let replacedNode;
    for (let i = 0; i < iPhone12.children.length; i++) {
        for (let j = i; j < iPhone12.children.length; j++) {
            if (+iPhone12.children[i].getAttribute('data-price') > +iPhone12.children[j].getAttribute('data-price')) {
                replacedNode = iPhone12.replaceChild(iPhone12.children[j], iPhone12.children[i]);
                insertAfter(replacedNode, iPhone12.children[i]);
            }
        }
    }
}
function priceDown() {
    let iPhone12 = document.querySelector('.iPhone12_container');
    let replacedNode;
    for (let i = 0; i < iPhone12.children.length; i++) {
        for (let j = i; j < iPhone12.children.length; j++) {
            if (+iPhone12.children[i].getAttribute('data-price') < +iPhone12.children[j].getAttribute('data-price')) {
                replacedNode = iPhone12.replaceChild(iPhone12.children[j], iPhone12.children[i]);
                insertAfter(replacedNode, iPhone12.children[i]);
            }
        }
    }
}
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

//sorting by colors
const filterColors = document.querySelectorAll('.box');

document.querySelector('.choose_color').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['color'];

    filterColors.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});

//choosing colors by buttons
document.getElementById('all').click();

function allColors() {
    document.getElementById('all').classList.remove('li_all');
    document.getElementById('all').classList.add('li_all_visible');
    document.getElementById('red').classList.remove('li_red_visible');
    document.getElementById('red').classList.add('li_red');
    document.getElementById('white').classList.remove('li_white_visible');
    document.getElementById('white').classList.add('li_white');
    document.getElementById('green').classList.remove('li_green_visible');
    document.getElementById('green').classList.add('li_green');
    document.getElementById('blue').classList.remove('li_blue_visible');
    document.getElementById('blue').classList.add('li_blue');
    document.getElementById('purple').classList.remove('li_purple_visible');
    document.getElementById('purple').classList.add('li_purple');
    document.getElementById('black').classList.remove('li_black_visible');
    document.getElementById('black').classList.add('li_black');
}
function onlyRed() {
    document.getElementById('red').classList.remove('li_red');
    document.getElementById('red').classList.add('li_red_visible');
    document.getElementById('all').classList.remove('li_all_visible');
    document.getElementById('all').classList.add('li_all');
    document.getElementById('white').classList.remove('li_white_visible');
    document.getElementById('white').classList.add('li_white');
    document.getElementById('green').classList.remove('li_green_visible');
    document.getElementById('green').classList.add('li_green');
    document.getElementById('blue').classList.remove('li_blue_visible');
    document.getElementById('blue').classList.add('li_blue');
    document.getElementById('purple').classList.remove('li_purple_visible');
    document.getElementById('purple').classList.add('li_purple');
    document.getElementById('black').classList.remove('li_black_visible');
    document.getElementById('black').classList.add('li_black');
}
function onlyWhite() {
    document.getElementById('white').classList.remove('li_white');
    document.getElementById('white').classList.add('li_white_visible');
    document.getElementById('all').classList.remove('li_all_visible');
    document.getElementById('all').classList.add('li_all');
    document.getElementById('red').classList.remove('li_red_visible');
    document.getElementById('red').classList.add('li_red');
    document.getElementById('green').classList.remove('li_green_visible');
    document.getElementById('green').classList.add('li_green');
    document.getElementById('blue').classList.remove('li_blue_visible');
    document.getElementById('blue').classList.add('li_blue');
    document.getElementById('purple').classList.remove('li_purple_visible');
    document.getElementById('purple').classList.add('li_purple');
    document.getElementById('black').classList.remove('li_black_visible');
    document.getElementById('black').classList.add('li_black');
}
function onlyGreen() {
    document.getElementById('green').classList.remove('li_green');
    document.getElementById('green').classList.add('li_green_visible');
    document.getElementById('all').classList.remove('li_all_visible');
    document.getElementById('all').classList.add('li_all');
    document.getElementById('red').classList.remove('li_red_visible');
    document.getElementById('red').classList.add('li_red');
    document.getElementById('white').classList.remove('li_white_visible');
    document.getElementById('white').classList.add('li_white');
    document.getElementById('blue').classList.remove('li_blue_visible');
    document.getElementById('blue').classList.add('li_blue');
    document.getElementById('purple').classList.remove('li_purple_visible');
    document.getElementById('purple').classList.add('li_purple');
    document.getElementById('black').classList.remove('li_black_visible');
    document.getElementById('black').classList.add('li_black');
}
function onlyBlue() {
    document.getElementById('blue').classList.remove('li_blue');
    document.getElementById('blue').classList.add('li_blue_visible');
    document.getElementById('all').classList.remove('li_all_visible');
    document.getElementById('all').classList.add('li_all');
    document.getElementById('red').classList.remove('li_red_visible');
    document.getElementById('red').classList.add('li_red');
    document.getElementById('green').classList.remove('li_green_visible');
    document.getElementById('green').classList.add('li_green');
    document.getElementById('white').classList.remove('li_white_visible');
    document.getElementById('white').classList.add('li_white');
    document.getElementById('purple').classList.remove('li_purple_visible');
    document.getElementById('purple').classList.add('li_purple');
    document.getElementById('black').classList.remove('li_black_visible');
    document.getElementById('black').classList.add('li_black');
}
function onlyPurple() {
    document.getElementById('purple').classList.remove('li_purple');
    document.getElementById('purple').classList.add('li_purple_visible');
    document.getElementById('all').classList.remove('li_all_visible');
    document.getElementById('all').classList.add('li_all');
    document.getElementById('red').classList.remove('li_red_visible');
    document.getElementById('red').classList.add('li_red');
    document.getElementById('white').classList.remove('li_white_visible');
    document.getElementById('white').classList.add('li_white');
    document.getElementById('green').classList.remove('li_green_visible');
    document.getElementById('green').classList.add('li_green');
    document.getElementById('blue').classList.remove('li_blue_visible');
    document.getElementById('blue').classList.add('li_blue');
    document.getElementById('black').classList.remove('li_black_visible');
    document.getElementById('black').classList.add('li_black');
}
function onlyBlack() {
    document.getElementById('black').classList.remove('li_black');
    document.getElementById('black').classList.add('li_black_visible');
    document.getElementById('all').classList.remove('li_all_visible');
    document.getElementById('all').classList.add('li_all');
    document.getElementById('red').classList.remove('li_red_visible');
    document.getElementById('red').classList.add('li_red');
    document.getElementById('white').classList.remove('li_white_visible');
    document.getElementById('white').classList.add('li_white');
    document.getElementById('green').classList.remove('li_green_visible');
    document.getElementById('green').classList.add('li_green');
    document.getElementById('blue').classList.remove('li_blue_visible');
    document.getElementById('blue').classList.add('li_blue');
    document.getElementById('purple').classList.remove('li_purple_visible');
    document.getElementById('purple').classList.add('li_purple');
}
//sorting by memory
const filterMemory = document.querySelectorAll('.box');

document.querySelector('.choose_memory').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['memory'];

    filterMemory.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all_memory') {
            elem.classList.add('hide');
        }
    });
});

//choosing memory by buttons
document.getElementById('all_memory').click();

function allMemory() {
    document.getElementById('all_memory').classList.remove('li_memory');
    document.getElementById('all_memory').classList.add('li_memory_visible');
    document.getElementById('64GB').classList.remove('li_memory_visible');
    document.getElementById('64GB').classList.add('li_memory');
    document.getElementById('128GB').classList.remove('li_memory_visible');
    document.getElementById('128GB').classList.add('li_memory');
    document.getElementById('256GB').classList.remove('li_memory_visible');
    document.getElementById('256GB').classList.add('li_memory');
}
function GB64() {
    document.getElementById('64GB').classList.remove('li_memory');
    document.getElementById('64GB').classList.add('li_memory_visible');
    document.getElementById('all_memory').classList.remove('li_memory_visible');
    document.getElementById('all_memory').classList.add('li_memory');
    document.getElementById('128GB').classList.remove('li_memory_visible');
    document.getElementById('128GB').classList.add('li_memory');
    document.getElementById('256GB').classList.remove('li_memory_visible');
    document.getElementById('256GB').classList.add('li_memory');
}
function GB128() {
    document.getElementById('128GB').classList.remove('li_memory');
    document.getElementById('128GB').classList.add('li_memory_visible');
    document.getElementById('all_memory').classList.remove('li_memory_visible');
    document.getElementById('all_memory').classList.add('li_memory');
    document.getElementById('64GB').classList.remove('li_memory_visible');
    document.getElementById('64GB').classList.add('li_memory');
    document.getElementById('256GB').classList.remove('li_memory_visible');
    document.getElementById('256GB').classList.add('li_memory');
}
function GB256() {
    document.getElementById('256GB').classList.remove('li_memory');
    document.getElementById('256GB').classList.add('li_memory_visible');
    document.getElementById('all_memory').classList.remove('li_memory_visible');
    document.getElementById('all_memory').classList.add('li_memory');
    document.getElementById('64GB').classList.remove('li_memory_visible');
    document.getElementById('64GB').classList.add('li_memory');
    document.getElementById('128GB').classList.remove('li_memory_visible');
    document.getElementById('128GB').classList.add('li_memory');
}