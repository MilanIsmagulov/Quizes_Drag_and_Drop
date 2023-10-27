var el = document.getElementById('row2');
var field1 = document.getElementById('field1')
var field2 = document.getElementById('field2')
var field3 = document.getElementById('field3')
var field4 = document.getElementById('field4')
var field5 = document.getElementById('field5')
var field6 = document.getElementById('field6')
var field7 = document.getElementById('field7')

window.onload = () => {
    calcImg();
}

function calcImg() {
    let heightImg = document.getElementById('img').clientHeight;

    document.getElementById('left-col').style.height = `${heightImg}px`;
    document.getElementById('right-col').style.height = `${heightImg}px`;
}

var sortable = new Sortable(el, {
    group: 'shared2',
	animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1) {
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

var sortableFields1 = new Sortable(field1, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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
var sortableFields2 = new Sortable(field2, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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
var sortableFields3 = new Sortable(field3, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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
var sortableFields4 = new Sortable(field4, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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
var sortableFields5 = new Sortable(field5, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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
var sortableFields6 = new Sortable(field6, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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
var sortableFields7 = new Sortable(field7, {
    group: 'shared2',
    animation: 150,
    onEnd: function(e) {
        var elem = e.item
        var parent = elem.parentNode
        if (elem.parentNode.getAttribute('id') !== 'row2' && parent.childNodes.length > 1 && e.to.getAttribute('id') !== 'row2') {
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