// main.js
alert("Hello World");
function change(){
  document.getElementById('el').innerHTML = "NEW TEXT";
}


var z = 1;
function print_it(){
  console.log(z); //Will return 1
}
/*LOCAL SCOPE
A variable that only pertains to the function you are currently in */
var z = 3;
function some_f(z){
  console.log(z);
}
some_f(10)

console.log(z);
/* another example */
var z = 3;
function some_f(){
  var z = 20;
  console.log(z);
}
some_f()

console.log(z);



var c = 10;
/*BLOCK SCOPE: EXAMPLE*/
function hallo(){
  if(true){
var c = 2; }
  console.log(c);
  // returns 2, not the global value 10
  // implication: variables don't have a
  // separate scope within a block
}
/*An argument is only accessible within the function it gets declared in*/

function haha(argument_uno){

  console.log(argument_uno);
}
/*>>"hello"*/

/*>>ReferenceError: argument_uno is not defined*/
haha("hello");
if (5>10){
	console.log("youll never this");
	}else{
		console.log("hi");
	}

if (5<10){
	console.log("youll see this");
}
var hit= 1
if (hit>10){
	console.log ("hit is less than ten")
}else {console.log ("wrong")
}
var his= 14
var him=10
if (hit>him){
	console.log ("hit is less than ten")
}else {console.log ("wrong")
}
if (3>4){
	console.log("what up");
}
else if(5===5){
	console.log("shut");
}
	else{
		console.log("sleep");
	}
	function alertName(somePersonsName){
		return alert (somePersonsName);
		console.log (somePersonsName);
	}
	alertName ("Aubrey");
	function someName(){

	}
someName("argument");

var abc =1
if(abc>0){
	console.log ("abc");
}
	else{ console.log("hi");
}
console.log ("what up");

function door (door1, door2, door3){
if (x="door2"){
	alert("you won a prize");
}
else if 
	(x="door3"){
	alert("you won prize2");
}
else{
	(x="door1")
	alert("you won prize3");

}
}
door
/* a function that takes any string as an argument and console logs to the user the text they've entered.*/
function someString(string){
	console.log (string);
}
someString ("Aubrey")
function Anything(x){
	return alert("hi");
}
console.log ("call door1, door2, door 3");
function door1(){
	alert("you won prize 1");
}
function door2(){
	alert("you won prize 2");
}
function door3(){
	alert("you won prize 3");
}

Anything("nothing");

for (var i =0; i<10; i++) {
	console.log(i);
}
friends=["me", "sue"]
for (var i = 0; i<friends.length; i++){
	console.log(friends[i]);
	alert(friends[i]);
}
hi=["run", "soup", "summon"]
for (var x= 0; x<hi.length; x++){
	console.log(hi[x]);
}
x =6
while (x<10){
	console.log("on number"+ x);
	x--;

}