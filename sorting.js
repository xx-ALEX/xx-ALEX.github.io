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
const filterBox = document.querySelectorAll('.box');

document.querySelector('.choose_color').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['color'];

    filterBox.forEach(elem => {
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