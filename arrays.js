// Write a function that accepts an array of strings and console.logs each element using a for loop.

let strings = ["A","k","i","r","a","C", "h", "i", "x"];

function eachElement (strings){
    for(let i = "" ; i < strings.length; i++ ){
        console.log(strings[i]);
    }
   
}
eachElement(strings);

// Write a function that accepts an array of 
// numbers and uses the forEach() method to 
// console.log each number multiplied by 2.

let array2 = [1,24,3,94,57,76];

array2.forEach((element ) => {
    console.log(element * 2);

});
// Write a function that takes in an array of numbers and consoles
//  the first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values

let array3 = [2,4,1,0,65,89,32];

array3.forEach((i) =>{
    if(i < array3[4]){
        console.log(i * 8);
    }
    else{
        console.log(i + 5);
    }
})

// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

let i = 0
function iteration(arrNum){
    while (i < arrNum.length){
        console.log(arrNum[i])
        i++

        if(i === 3){   
        break;
        }
    
    }
}
iteration(arrNum)
// Write a function that takes in a an array of strings and 
// use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']

function otherStrings(fruits){
    for(let f = 0 ; f<fruits.length ; f++){
       if(f === 1){
            continue;
        }
        console.log(fruits[f])
        
    }
}
otherStrings(fruits)
