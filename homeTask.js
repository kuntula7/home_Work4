//Task 1

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/
function max(arr){
    for(let key in arr){
        if(arr[key] === 5){
        console.log(`${key} - ${arr[key]}`)}}
}
let arr1=['3', 'a', 'a', 'a', '2', '3', 'a', '3', 'a', '2', '4', '9', '3'];
let result = arr1.reduce((acc,element) =>{
    if(element in acc){
        acc[element]++
    }else{
        acc[element] = 1
    } return acc
},{})
console.log(result)
max(result)

/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8

*/
function sample(args){
    let result = ''
    for(i=0;i<args.length;i++){
        if(args[i]%2 === 0 && args[i+1]%2 ===0){
            if(args.indexOf(args.at(-1),1) == args.length - 1){
                result = result
            }
            if(result.includes(args[i])){
            result = result +'-'+ args[i+1]}
            else{result =result + args[i]+ '-'+args[i+1]}}
         else if(args[i]%2 === 0 && args[i+1]%2 ||args[i]%2 && args[i+1]%2 ===0 ){result += args[i+1]}
    }return result
}
let array = [0,2,5,4,6,8]
let result2 = sample(array)
console.log(result2)
/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]

*/
function concate(arr1,arr2){
    let result3 
    for(i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){arr2.splice(arr2.indexOf(arr2[i]),1)}
        result3 = arr1.concat(arr2)
    } return result3
}
let array1 = [1, 2, 3]
let array2 = [2, 30, 1]

console.log(concate(array1,array2))

/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

function readyToPutInTheDOM(arr){
    arr.map((element)=>{
       return  '<h1>' +element.name+'</h1>'+'<h2>'+element.age+ '</h2>'
    });
  }

  let newArray = [{name: "Angelina Jolie",age: 80},{ name: "Eric Jones", age: 2},{ name: "Paris Hilton",age: 5},{name: "Kayne West",age: 16},{name: "Bob Ziroll",age: 100}]

  let copy3 =  newArray.map((element)=>{
    return'<h1>' +element.name+'</h1>'+'<h2>'+element.age+ '</h2>'
 })
  console.log(copy3)
  console.log(readyToPutInTheDOM(newArray)); 

  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]



  /* Task 5 */

  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .



  */
  function sumOfDifferences(arr){
      if(arr.length < 2){
          return 0
      }
    let newArr = arr.sort((a,b)=>{
        return b-a
    })
    let sum = [];
    for(i=0;i<newArr.length;i++){
        sum.push(newArr[i] - newArr[i+1])
    }
    sum.pop()
    return sum.reduce((acc,element)=>acc+element)
  }

let array3 = [2,1,10]
console.log(sumOfDifferences(array3))
