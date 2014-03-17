//http://winter2014.refactoru.com/exercises/js/functional-short-answer
// var pluralize = function (word, number) {
//  if(number === 1) {
//   return word;
//  }
//  else {
//   return word + "s";
//  }
// };

// var pluralize = function (word, number) {
// 	return number===1 ? word : word + "s";
// };

// var newVar = pluralize('dog', 6);
// console.log(pluralize('dog', 6));

// //
// var add = function (num1, num2){
// 	var sum = num1 + num2;
// 	return sum
// };

// var result = add(6, 4);

// //

// var subtract =function (sub1, sub2) {
// 	var subs = sub1-sub2;
// 	return subs
// }; 

// var result = subtract(4, 6);

// //

// var nameCheck = function (name) {
// 	if (name === "Dave") {
// 		return "sayhi";
// 	} else {
// 		return "goodbye";
// 	}	
// };

// var nameVer = nameCheck("roger"); 

var getVictimInfo = function() {
 var victim = {};
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
 return victim;
};

var victim = getVictimInfo();

alert('Thank you! Victim entered: \n' +
 victim.name + ", " +
 victim.phone + ", " +
 victim.street);

// var dog ="fido";
// var cat = 4+4;
// console.log(cat); 
// var frog = cat+4
// console.log(frog);
// console.log(dog+cat);
// console.log(dog.length);
// frog= frog-5
// frog-=5
// if (frog <12){
// 	console.log('hey');
// }else{
// 	console.log('hello');
// }
// for (var i=0; i<=cat; i++){
// 	// console.log(cat);
// 	if(i!==5 && i!==3){
// 		console.log('cat' + i);
// 	}

// };

// var add= function(auto, year){
//  return auto + " " + year;
// };
// console.log(add("dodge")); 