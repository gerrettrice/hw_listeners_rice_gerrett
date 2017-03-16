var firstHeading = document.getElementsByTagName('h1')[0];
var clicks = 1;

firstHeading.addEventListener('click', function addParagraph() {
    var newParagraph = document.createElement('p');
    var text = document.createTextNode('This is a paragraph ' + clicks + '.');
    newParagraph.appendChild(text);
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
    clicks ++;
});
