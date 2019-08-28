var f = function(){
    window.open("https://www.google.com/");
}
var ev1 = document.getElementById('button');
ev1.addEventListener('click',f);

var ev2=document.getElementById('button1');
var f1 = function(){
    document.getElementById('text').innerHTML = '';
}
ev2.addEventListener('click',f1);

