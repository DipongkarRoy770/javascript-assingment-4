//Problem 1: Let’s play a mind game
function mindGame(number){
  const number1= number*3;
  const number2 =number1+10;
  const number3=number2/2;
  const number4 = number3-5; 
  return number4;
}
const total = mindGame(50)
 //console.log(total);

 //Problem 2: Finding even or odd

 function evenOdd(str){
  if((str.length) % 2 === 0){
   return 'even'
  }
  else{
  return 'odd'
  }
 }
const cheek = evenOdd('phero');
//console.log(cheek)

//Problem 3: Is Less or Greater than seven

function isLGSeven(num){
    if(num < 7){
        return num - 7
    }
    else{
        return num * 2
    }
}
const numbers = isLGSeven(15);
//console.log(numbers)

//Problem 4: Finding Bad data
function findingBadData(array){
  let badData = 0;
  for(let i = 0; i < array.length; i++){
    const newaData = array[i];
      if(newaData < 0){
         badData += 1
      }
  }
  return badData
}
const data = findingBadData([-4, -9, -5, -33, -55 ])
 //console.log(data)

 //Problem 5: Convert your gems into diamond

 function gemsToDiamond(gems1, gems2, gems3){
  let friend1 = gems1 * 21;
  let friend2 = gems2 * 32;
  let friend3 = gems3 * 43;
  let total = friend1 + friend2 + friend3;

  if(1000 * 2 < total){
      total -= 2000;
  }

  return total;
}
const totalGems = gemsToDiamond( 20, 200, 50);
console.log(totalGems)
