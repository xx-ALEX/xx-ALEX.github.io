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
