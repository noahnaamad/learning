//francisco, ashley
//freecodecamp.com


//spread operator: takes array contents and puts it in the structure you put it in

function wheatFromChaff(input){
	result = [];
  input.forEach(function(item, index){
  		if (item < 0){
      	result.unshift(item);
      } else{
      	result.push(item);
      }
  });
  return result;
}

console.log(wheatFromChaff([7, -8, 1, -2]));


