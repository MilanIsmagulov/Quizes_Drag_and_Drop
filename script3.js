const anwserArr3 = ['some1', 'some2', 'some3', 'some4', 'some5', 'some6', 'some7']

const leftColLength = 4
const rightColLength = 3

let leftCol = []
let rightCol = []
let realIndex = 0;

const row2 = document.getElementById('row2')
const leftColElem = document.getElementById('left-col')
const rightColElem = document.getElementById('right-col')

let dragElem2;
let startIndx

let rowList = [] 

createRow()
createFields()
calcImg()

addEventListeners3();

function calcImg() {
    let heightImg = document.getElementById('img').clientHeight;

    document.getElementById('left-col').style.height = `${heightImg}px`;
    document.getElementById('right-col').style.height = `${heightImg}px`;
}

window.addEventListener('resize', calcImg);

function createRow() {
    anwserArr3.forEach((item, index) => {
        const rowItem = document.createElement('li')

        rowItem.setAttribute('id', index)
        rowItem.classList.add('item3')
        rowItem.draggable = 'true'
        rowItem.innerText = item

        rowList.push(rowItem)
        row2.appendChild(rowItem)

    })
}

function createFields() {
    for (let i = 0; i < leftColLength; i++) {
        const field = document.createElement('div')
        
        field.setAttribute('index', realIndex)
        field.classList.add('field')
        
        leftCol.push(field)
        leftColElem.appendChild(field)

        realIndex++
    }

    for (let i = 0; i < rightColLength; i++) {
        const field = document.createElement('div')
        
        field.setAttribute('index', realIndex)
        field.classList.add('field')
        
        
        rightCol.push(field)
        rightColElem.appendChild(field)

        realIndex++
    }
}

function startDragBlock2() {
    dragElem2 = this;
    this.classList.add('hide');
    // console.log(this.closest('.field'))
    if (this.closest('.field').getAttribute('index')) {
        startIndx = +this.closest('.field').getAttribute('index')
        console.log(startIndx)
    }
    // if (this.closest('div').getAttribute('index') === null) {
    //     startIndex = this.closest('ul').getAttribute('index')
    // } else  {
    //     startIndex = this.closest('div').getAttribute('index')
    // }
}
function endDragBlock2() {
    dragElem2 = null;
    this.classList.remove('hide');
}
function dragColOver2(e) {
    e.preventDefault();
    this.classList.add('hover');
}
function dragColEnter2(e) {
    e.preventDefault();
    this.classList.add('hover');
}
function dragColLeave2() {
    this.classList.remove('hover');
}
function dropColBox2() {
    this.append(dragElem2);
    this.classList.remove('hover');

    let endIndex = this.getAttribute('index');

    console.log(startIndx, endIndex)

    swapItems2(startIndx, endIndex);
}

function swapItems2(start, end) {
    let itemOne, itemTwo;

    // console.log(fromIndex, toIndex)

    if (start <= leftColLength && end <= leftColLength) {
        // console.log(leftCol)
        itemOne = leftCol[start].querySelector('.item3');
        itemTwo = leftCol[end].querySelector('.item3');
        console.log(itemOne, itemTwo)

        leftCol[start].appendChild(itemTwo);
        leftCol[end].appendChild(itemOne);
    }

    // const itemOne = listItems[fromIndex].querySelector('.item3');
    // const itemTwo = listItems[toIndex].querySelector('.item3');

    // leftCol[fromIndex].appendChild(itemTwo);
    // leftCol[toIndex].appendChild(itemOne);
}

function addEventListeners3() {
    const itemElem = document.querySelectorAll('.item3');
    const fieldsElem = document.querySelectorAll('.field');

    itemElem.forEach((item) => {
        item.draggable = true;
        item.addEventListener('dragstart', startDragBlock2);
        item.addEventListener('dragend', endDragBlock2);
    });
    fieldsElem.forEach((elem) => {
        elem.addEventListener('dragover', dragColOver2);
        elem.addEventListener('dragenter', dragColEnter2);
        elem.addEventListener('dragleave', dragColLeave2);
        elem.addEventListener('drop', dropColBox2);
    });
}