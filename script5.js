var item1 = document.getElementById('list-item1');
var item2 = document.getElementById('list-item2');
var item3 = document.getElementById('list-item3');

var sortable = new Sortable(item1, {
    group: 'shared4',
	animation: 150,
});
var sortable = new Sortable(item2, {
    group: 'shared4',
	animation: 150,
});
var sortable = new Sortable(item3, {
    group: 'shared4',
	animation: 150,
});