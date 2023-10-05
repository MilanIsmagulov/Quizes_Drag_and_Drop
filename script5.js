const anwserArr = [['some1', 'some2',], ['some3'], ['some4']]; //Ответы в правильном порядке
const text = ["lk;fkdsk", "fdshfgvc", "boprewre"]

const list = document.getElementById('list');
let listItems = [];
let dragStartIndex;

createList2()

function createList2() {
    [...anwserArr]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('id', index);
        listItem.innerHTML = `
    <div class="number">${text[index]}</div>
    <div class="item" draggable="true">${item}</div>
  `;
        listItems.push(listItem);
        list.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('id');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('id');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.item');
    const itemTwo = listItems[toIndex].querySelector('.item');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function checkAnwser5() {
    listItems.forEach((item, index) => {
        const itemName = item.querySelector('.item').innerText.trim()

        if (itemName !== anwserArr[index].join(',')) {
            item.classList.add('incorrect')
        } else {
            item.classList.remove('incorrect')
            item.classList.add('correct')
        }
    });
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.item');
    const dragListItems = document.querySelectorAll('.list li');

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach((item) => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}