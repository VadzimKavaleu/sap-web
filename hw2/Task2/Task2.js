var t=prompt('enter username');
var p = t.search(/[1|2|3|4|5|6|7|8|9|0]/);

if(p!=-1){
    var rev = reverse(t);
    document.getElementById('text').innerHTML = rev;
}
else{
    var upp = uppercase(t);
    document.getElementById('text').innerHTML = upp;
}



function uppercase(str1){
    var newString1="";
    for(var j = 0; j<str1.length; j++){
        if (j % 2 == 0){
        newString1 += str1[j].toUpperCase();
        }
        else{
        newString1 += str1[j].toLowerCase();
        }
    } 
    return newString1;
    
}
function reverse(str){
    var newString = "";
    for (var i = str.length-1; i>=0 ; i--){
        newString += str[i];
    }
    return newString;
}

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

