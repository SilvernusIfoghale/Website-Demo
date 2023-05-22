// alert('Hello');
// window.alert('this is a windows alert');

let firstName = "Testing Js";
let age = 25;
let student = true;

console.log('Hello', firstName);
console.log('You are ', age, 'years old');
console.log('Enrolled:', student);


document.getElementById("p1").innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You\'re ' + age + 'years old';
document.getElementById("p3").innerHTML = 'Enrolled: ' + student;

let username;

document.getElementById('myButton').onclick = function(){
  username = document.getElementById('myName').value;
  document.getElementById('dp_label').innerHTML = 'Hello ' + username;
}