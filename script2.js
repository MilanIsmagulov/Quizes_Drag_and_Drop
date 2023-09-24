// dran&drop 2
const anwserArr2 = ['some1', 'some2', 'some3'];
document.querySelectorAll('.item2').forEach((n, i) => (n.textContent = anwserArr2[i]));
const items2 = document.querySelectorAll('.item2');
const colms = document.querySelectorAll('.col');


let dragElem = null;
items2.forEach((item) => {
    item.draggable = true;
    item.addEventListener('dragstart', startDragBlock);
    item.addEventListener('dragend', endDragBlock);
});

function startDragBlock() {
    dragElem = this;
	 console.log(dragElem)
    this.classList.add('hide');
}
function endDragBlock() {
    dragElem = null;
    this.classList.remove('hide');
}

colms.forEach((col) => {
    col.addEventListener('dragover', dragColOver);
    col.addEventListener('dragenter', dragColEnter);
    col.addEventListener('dragleave', dragColLeave);
    col.addEventListener('drop', dropColBox);
});

function dragColOver(e) {
    e.preventDefault();
    this.classList.add('hover');
}
function dragColEnter(e) {
    e.preventDefault();
    this.classList.add('hover');
}
function dragColLeave() {
    this.classList.remove('hover');
}
function dropColBox() {
    this.append(dragElem);
    this.classList.remove('hover');
}