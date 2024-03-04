var x=9;
var y=18;
var z=x+y;
document.getElementById('demo').innerHTML=z; 
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
let txt='';
for(let x in person){
    txt+=person[x]+' ';
};
document.getElementById('demo1').innerHTML=txt;