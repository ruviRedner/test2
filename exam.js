const Mission1 =(numbers) =>{
     const  evenNumbers = numbers.filter(num => num % 2 === 0);
     return evenNumbers
}
console.log(Mission1([1, 2, 3, 4, 5, 6, 7,8,9]));


const Mission2 =(string) =>{
    const strToArray = string.split(' ');
    const wordLengths = strToArray.filter(word => word.length == 4);
    return wordLengths.length
}
console.log(Mission2("בדיקה לתרגיל 2 מספר נראה לי יצא סבבה"));


const Mission3 = (array) =>{
      return array.flat()
}

console.log(Mission3([[1,2,3],[4,5,6],[7,8,9]]));

const Mission4 = (array) =>{
       isAscending = true;
       isDescending = true;
       for(let i = 0; i < array.length - 1; i++){
         if(array[i] > array[i+1]){
            isAscending = false;
         }
         if(array[i] < array[i+1]){
            isDescending = false;
         }
         
       }
       if(isAscending) return 1
       if(isDescending) return 2
       return 0;
       
    }
    console.log(Mission4([1,2,4,6,21,31,1,24,5]));
    console.log(Mission4([1,2,3,3,4,3,6,4,5,6]));
    console.log(Mission4([7,2,1,-1,-6]));
    




















module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}
   