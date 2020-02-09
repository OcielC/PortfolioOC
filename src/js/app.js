import numbers from './numbers.js';
import math from './math.js';
import '../scss/main.scss';

function filterSelection(c) {
	let x, i;
	x = document.getElementsByClassName('project-column');
	if (c == 'all') c = '';
	// Add the "show class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

	for (i = 0; i < x.length; i++) {
		projectOCRemoveClass(x[i], 'show');
		if (x[i].className.indexOf(c) > -1) ozzyAddClass(x[i], 'show');
	}
}

// show filtered elements

function ozzyAddClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

// hide elements that are not selected

function projectOCRemoveClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}
filterSelection('all'); // Execute the function and show all columns

// Add active class to the current button (highlight it)

let btnContainer = document.getElementById('myBtnContainer');
let btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		let current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}

document.getElementById('filter-all').addEventListener(
	'click',
	function() {
		filterSelection('all');
	},
	false
);
document.getElementById('filter-newsletter').addEventListener(
	'click',
	function() {
		filterSelection('newsletter');
	},
	false
);
document.getElementById('filter-promotional').addEventListener(
	'click',
	function() {
		filterSelection('promotional');
	},
	false
);
document.getElementById('filter-receipts').addEventListener(
	'click',
	function() {
		filterSelection('receipts');
	},
	false
);
document.getElementById('filter-landingpage').addEventListener(
	'click',
	function() {
		filterSelection('landingpage');
	},
	false
);
