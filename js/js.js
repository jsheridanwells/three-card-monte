//images to hide under cards
var pics = [
	'../img/ace-hearts.png' , 
	'../img/king-clubs.png' , 
	'../img/king-spades.png' , 
	'../img/back.jpg'
]

var indices = [0, 1, 2];

var images = document.getElementsByTagName('img');

var counter = document.getElementById('counter');

var count = 0;

var btn = document.querySelector('.btn');

//shuffle the array numbers randomly (do not delete)
function shuffleIds(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function turnCards() {
	shuffleIds(indices);
	var i = 0
	for (i = 0; i < indices.length; i++) {
		this.setAttribute('src' , pics[indices[i]]);
	}
	indices.pop(i);
}

function tryAgain() {
	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute('src' , pics[3]);
	}
	indices = [0, 1, 2];
}

for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click' , turnCards);
}

counter.innerHTML = count;

btn.addEventListener('click' , tryAgain);

console.log(count);

//NEXT STEPS:  
//   pop makes it so that I can click the same card multiple times.  I need it to freeze
// figure out how to make a score.  
//  set this behaviour: 
//    1.  click a card
//    2.  add to score if ace
//    3.  reveal all cards
//    4.  refresh (can probably take out try again button)




