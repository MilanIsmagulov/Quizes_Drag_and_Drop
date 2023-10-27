var row = document.getElementById('row3');
var collumn1 = document.getElementById('fieldCol1')
var collumn2 = document.getElementById('fieldCol2')
var collumn3 = document.getElementById('fieldCol3')
var collumn4 = document.getElementById('fieldCol4')

var sortable = new Sortable(row, {
    group: 'shared3',
	swapClass: "highlight",
	animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row' && parent.childNodes.length > 1) {
            var childrens = e.to.children;
            var lastElem
            [...childrens].forEach((el) => {
                elem !== el ? lastElem = el : ''
            })

            lastElem.replaceWith(elem)
            e.from.appendChild(lastElem)
        }
    }
});

var sortableCol1 = new Sortable(collumn1, {
    group: 'shared3',
	animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row3' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row3') {
            var childrens = e.to.children;
            var lastElem
            [...childrens].forEach((el) => {
                elem !== el ? lastElem = el : ''
            })

            lastElem.replaceWith(elem)
            e.from.appendChild(lastElem)
        }
    }
});

var sortableCol2 = new Sortable(collumn2, {
    group: 'shared3',
	animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row3' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row3') {
            var childrens = e.to.children;
            var lastElem
            [...childrens].forEach((el) => {
                elem !== el ? lastElem = el : ''
            })

            lastElem.replaceWith(elem)
            e.from.appendChild(lastElem)
        }
    }
});

var sortableCol3 = new Sortable(collumn3, {
    group: 'shared3',
	animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row3' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row3') {
            var childrens = e.to.children;
            var lastElem
            [...childrens].forEach((el) => {
                elem !== el ? lastElem = el : ''
            })

            lastElem.replaceWith(elem)
            e.from.appendChild(lastElem)
        } 
    }
});

var sortableCol4 = new Sortable(collumn4, {
    group: 'shared3',
	animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row3' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row3') {
            var childrens = e.to.children;
            var lastElem
            [...childrens].forEach((el) => {
                elem !== el ? lastElem = el : ''
            })

            lastElem.replaceWith(elem)
            e.from.appendChild(lastElem)
        } 
    }
});