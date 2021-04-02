"use strict";


// CHANGE BG COLOR
var changeBgColor = function() {
	var body = document.body;

	if (body.classList == 'blackBody') {
		body.classList.remove('blackBody');
		body.classList.add('whiteBody');
	} else {
		body.classList.remove('whiteBody');
		body.classList.add('blackBody');
	}
}
// CHANGE BG COLOR


// SHOWMORE
var showMore = function() {
	var ulList = document.querySelector('.ulList'),
		liList = document.querySelectorAll('.ulList > li'),
		countLi = liList.length,
		lastMinusOne = countLi - 1,
		lastElement = liList[lastMinusOne],
		showElem = document.querySelector('.showElem'),
		showElemParent = document.querySelector('.showmore');

	if (countLi == 5) {
		lastElement.style.display = (lastElement.style.display == 'none') ? '' : 'none'
	}

	showElem.addEventListener('click', function() {
		lastElement.style.display = 'flex';
		showElemParent.style.display = 'none';
	})
}

showMore();
// SHOWMORE


// ANIMATE
var microAnimate = function() {
	var link = document.querySelector('.microIcon');

	link.addEventListener('click', function (event) {
	    event.preventDefault();

	    // Remove any old one
	    var wave = document.querySelector('.wave');
	    if (wave) {
	        wave.remove();
	    }

	    // Setup
	    var buttonWidth = this.offsetWidth,
	        buttonHeight = this.offsetHeight;

	    // Make it round!
	    if(buttonWidth >= buttonHeight) {
	        buttonHeight = buttonWidth;
	    } else {
	        buttonWidth = buttonHeight;
	    }

	    // Get the center of the element
	    var x = event.offsetX==undefined?event.layerX:event.offsetX - buttonWidth / 2,
	        y = event.offsetY==undefined?event.layerY:event.offsetY - buttonHeight / 2;

	    // Add the element
	    var span = document.createElement('span');
	    span.className = 'wave';
	    var s = span.style;
	    s.width = buttonWidth + 'px';
	    s.height = buttonHeight + 'px';
	    s.top = y + 'px';
	    s.left = x + 'px';
	    this.appendChild(span);
	});
	
}

microAnimate();
// ANIMATE


// AUDIO PLAY
var audioPlay = function() {
	var btn = document.getElementById('microIcon'),
  		btnAudio = document.getElementById('waveEffect');

    btn.addEventListener('click', function() {
    	btnAudio.play();
    });
}

audioPlay();
// AUDIO PLAY


// ELEMENT TRANSFER
var elemTransfer = function() {
	var mobileBlock = document.querySelectorAll('.w40.right'),
		mobileLength = mobileBlock.length,
		elem = document.querySelectorAll('.w40Bottom');
	for (var i = 0; i < mobileLength; i++) {
		mobileBlock[i].append(elem[i]);
	}
}

if (document.documentElement.clientWidth <= 375) {
	elemTransfer();
}
// ELEMENT TRANSFER