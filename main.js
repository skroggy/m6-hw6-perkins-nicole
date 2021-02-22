var boxOne = document.getElementById('box1');
var boxTwo = document.getElementById('box2');
var boxThree = document.getElementById('box3');
var main = document.getElementById('main');
var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Start Over';

boxOne.addEventListener('mouseover',
    function() {
        boxOne.style.backgroundColor = 'pink';
        boxTwo.style.backgroundColor = 'pink';
        boxThree.style.backgroundColor = 'pink';
    }, false) 

boxTwo.addEventListener('mouseover',
    function() {
        boxOne.style.backgroundColor = 'pink';
        boxTwo.style.backgroundColor = 'pink';
        boxThree.style.backgroundColor = 'pink';
    }, false) 

 boxThree.addEventListener('mouseover',
    function() {
        boxOne.style.backgroundColor = 'pink';
        boxTwo.style.backgroundColor = 'pink';
        boxThree.style.backgroundColor = 'pink';
    }, false) 

boxOne.onclick = function() {
    main.innerHTML = 'Oooh - so close, but no cigar!';
    return false;
  };

boxTwo.onclick = function() {
    main.innerHTML = 'DING DING DING - We have a winner!';
    return false;
  };

boxThree.onclick = function() {
    main.innerHTML = 'Oops, better luck next time!';
    return false;
  };


main.onclick = function() {
    document.body.appendChild(btn);
}

btn.onclick = function() {
    window.location = 'index.html'
}