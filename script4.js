const anwserArr4 = ['some1', 'some2', 'some3', 'some4']
const imgPathArr = ['./03_01.png', './03_01.png', './03_01.png', './03_01.png'] 

const row3 = document.getElementById('row3')
const collumnInner = document.getElementById('drag4-inner')

let rowList2 = []
let fieldsList = []
let fullList2 = []

let dragElem3;
let startIndx2;
let endIndx2;

createRow2()
createColumnElement()

addEventListeners4()

function createRow2() {
    [...anwserArr4]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        const rowItem = document.createElement('li')

        rowItem.setAttribute('id', index)
        rowItem.classList.add('item4')
        rowItem.draggable = 'true'
        rowItem.innerText = item

        rowList2.push(rowItem)
        row3.appendChild(rowItem)
    })
}

function createColumnElement() {
    imgPathArr.forEach((item, index) => {
        const field = document.createElement('div')

        field.classList.add('field-col')
        field.innerHTML = `
        <img class="img-col" src="${item}" alt="img">
        <div class="field" index="${index}"></div>
        `
        fullList2.push(field)
        collumnInner.appendChild(field)
    })
}

function dragStart3() {
    dragElem3 = this;
    if (this.parentNode.getAttribute('index') === 'row2') {
        startIndx2 = this.parentNode.getAttribute('index')
    } else {
        startIndx2 = +this.closest('.field').getAttribute('index')
    }
}

function dragEnd3() {
    dragElem3 = null
}

function dragEnter3() {
    this.classList.add('over');
}

function dragLeave3() {
    this.classList.remove('over');
}

function dragOver3(e) {
    e.preventDefault();
}

function dragDrop3() {
    if (this.getAttribute('index') === 'row2') {
        endIndx2 = this.getAttribute('index');
    } else {
        endIndx2 = +this.getAttribute('index');
    }
    
    const indexDragElem = +dragElem3.getAttribute('id')

    if (startIndx2 === 'row2' && this.childNodes.length === 0) {
        this.append(dragElem3)
    } else if (startIndx2 !== undefined && this.childNodes.length === 0) {
        this.append(dragElem3)
    } else if (startIndx2 === 'row2' && this.childNodes.length !== 0) {
        swap2(endIndx2, indexDragElem)
    } else if (startIndx2 !== undefined && endIndx2 === 'row2') {
        this.append(dragElem3)
    } else if (startIndx2 !== undefined && endIndx2 !== undefined && endIndx2 !== 'row2') {
        swapItems3(startIndx2, endIndx2);
    }
    this.classList.remove('over');
}

function swap2(end, start) {
    const itemOne = rowList2[start]
    const itemTwo = fullList2[end].querySelector('.item4')

    rowList2[start].replaceWith(itemTwo)
    fullList2[end].children[1].append(itemOne)
}

function swapItems3(fromIndex, toIndex) {
    const itemOne = fullList2[fromIndex].querySelector('.item4');
    const itemTwo = fullList2[toIndex].querySelector('.item4');

    fullList2[fromIndex].children[1].appendChild(itemTwo);
    fullList2[toIndex].children[1].appendChild(itemOne);
}

function checkAnwser4() {
    fullList2.forEach((item, index) => {
        if (item.children[1].querySelector('.item4')?.innerText.trim() === undefined) {
            item.children[1].classList.add('incorrect')
        } else {
            const itemName = item.children[1].querySelector('.item4').innerText.trim();

            if (itemName !== anwserArr4[index]) {
                item.children[1].classList.add('incorrect')
            } else {
                item.children[1].classList.remove('incorrect')
                item.children[1].classList.add('correct')
            }
        }
    });
}

function addEventListeners4() {
    const itemElem = document.querySelectorAll('.item4');
    const fieldsElem = document.querySelectorAll('.field');
    const rowElem = document.querySelectorAll('.row')

    itemElem.forEach((item) => {
        item.draggable = true;
        item.addEventListener('dragstart', dragStart3);
        item.addEventListener('dragend', dragEnd3);
    });
    fieldsElem.forEach((elem) => {
        elem.addEventListener('dragover', dragOver3);
        elem.addEventListener('dragenter', dragEnter3);
        elem.addEventListener('dragleave', dragLeave3);
        elem.addEventListener('drop', dragDrop3);
    });
    rowElem.forEach((elem) => {
        elem.addEventListener('dragover', dragOver3);
        elem.addEventListener('dragenter', dragEnter3);
        elem.addEventListener('dragleave', dragLeave3);
        elem.addEventListener('drop', dragDrop3);
    })
}