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


const Mission3 =() =>{

}

const Mission4 =() =>{

}

const Mission5 =() =>{

}

const Mission6 =() =>{

}















module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5,
    Mission6
}
   