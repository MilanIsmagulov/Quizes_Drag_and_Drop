var el = document.getElementById('items');

var sortable = new Sortable(el, {
	swap: true,
	swapClass: "highlight",
	animation: 150,
});