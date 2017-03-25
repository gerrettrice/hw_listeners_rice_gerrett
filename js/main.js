// This event listener watches for a click on the first div and inserts text in the empty p tag
var one = document.getElementById('one');
one.addEventListener('click', function () {
    document.getElementById('more').innerHTML = 'This will have to do.';
});

// This event listener watches for a mouseover on the second div and changes the background color of the p tag
var two = document.getElementById('two');
two.addEventListener('mouseover', function () {
    document.getElementById('highlight').style.background = 'yellow';
});

// This event listener watches for a click on the third div and adds a p tag for each click
var three = document.getElementById('three');
three.addEventListener('click', function () {
    var node = document.createElement('p');
    var textnode = document.createTextNode('MORE!');
    node.appendChild(textnode);
    document.getElementById('three').appendChild(node);
});
