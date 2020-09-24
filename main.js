/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(str){
  return "That's a long string!"
}



if(isItLong){
  console.log("That's a long string.")
}

function isItMedium(str){
  return "That's a regular sized string!"
}

if(isItMedium){
  console.log("That's a regular sized string!")
}

function isItShort(Str){
  return "That's a small string!"
}
if(isItShort){
  console.log("That's a small string !")
}

function howLongIsMyString(str){
  return "That's a long string!" 
} 

function instructorHeight(num){
  return 
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}