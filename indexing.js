let temperature = [25, 28, 26, 23, 27, 29, 30];


temperature[3]= temperature[3]+2

console.log(temperature);

console.log("How are you")

/*var age = 20;
age = 21;
console.log(age);
console.log("age");
*/
/*
var a = 2;
var b = "Karan";
console.log(typeof a);
console.log(typeof b);
*/
/*
var a = 10;
var b = 20;
var c = "10";

console.log(b*c);
console.log(b+c);
console.log(c/a);
console.log(b-c);
*/
/*
var num = prompt("Enter a number: ")

for (i=0;i<=num;i++){
    if (i%2==0){
        console.log(i,"This is a Even Number")
    }
    else{
        console.log(i,"This is a Odd Number")
    }
}
    */
/*
var num1 = +(prompt("First No"))
var num2 = +(prompt("Second NO"))
var count = 0;
for (let i=num1; i<=num2;i++){
    if (i%2==0){ 
        count++
    }
}

console.log(count)
*/
/*
let student1 = "Karan";
let student2 = "Chhavi";
let student3 = "Khushbu";
let student4 = "Kapil";

console.log(student1, student2, student3, student4);
*/
/*
let arr = ["Karan", "Chhavi", "Khushbu", "Kapil"];


let num = [1, 2, 3, 4, 5]

let mix = ["karan", 1, 2, 5, 8, true, false]
//console.log(arr[0]);

for (let i =0; i<arr.length;i++){
//    console.log(arr[i]);
}

let str = "masaischool";
for (let i =0; i<str.length;i++){
//        console.log(str[i]);
    }
  
arr = ["m", "a", "s", "a", "i"];
let nstr = "";
for (let i =0; i<str.length;i++){
            if (str[i]==="a"){
                nstr = nstr + "#";
            }
            else{
                nstr = nstr + str[i];
            }
        }


for (let i =0; i<arr.length;i++){
      if (arr[i]==="a"){
        arr[i]="#";
    }
}

console.log(arr);
console.log(nstr);
*/
/*
let arr = ["m", "a", "s", "a", "i"];

console.log(arr);
let arr2 = [];
for (let i = arr.length-1; i>=0; i--){
    arr2 = arr2 + arr[i];
}
console.log(arr2);
*/
/*
let version = ["1.0", "2.0", "2.5", "1.01", "3.0", "1.2"];
let unsupported = "1";

for (let i = 0; i<version.length; i++){
    if (unsupported == version[i][0]){
        console.log("This version is unspported please remove it", version[i])
    }
}
    */

/*
let shop = ["apple", "banana", "orange", "kiwi"];
//let a = "a"
let count = 0;


for (let i = 0; i<shop.length; i++){
    let fruit = shop[i];
    let flag = false;

    for (let j = 0; j<fruit.length;j++){
        if (fruit[j]=="a"){
            flag = true;
            break;

        }
    }
    if (flag){
        count++;
    }
}
console.log(count);

*/
/*
let payment = prompt()

function callPizzaHut(flag){
    if (flag == "Success"){
        return "Pizza Delivered"
    }
    else{
        return "Order Cancelled"
    }
}

let pizza = callPizzaHut(payment)
console.log(pizza)
console.log(deliveredPizza(pizza))

function deliveredPizza(operation){
    if ("Pizza Delivered" == operation){
        return "Enjoy your meal"
    }
    else{
        return "No Party"
    }
}
deliveredPizza(pizza)

*/

//callPizzaHut(false)
//deliveredPizza(callPizzaHut)

/*
function calculatePrice(){
    while(true){
        try {
            let price = prompt("Enter the price:");
            price = parseFloat(price);

            if (isNaN(price) || price <= 0){
                throw new Error("Invalid price. Please enter a positive number.");
            }
            let discount = prompt("Enter the discount (leave blank for default 10%):");
            if (discount.trim() === "") {
                discount = 10;
            } else {
                discount = parseFloat(discount);
                if (isNaN(discount) || discount < 0 || discount > 100){
                    throw new Error("Invalid discount. Please enter a value between 0 and 100.");
                }
            }
            const finalPrice = price - (price*discount)/100;
            console.log("Final Price after discount:", finalPrice);
            return finalPrice.toFixed(2);
        }   catch (error) {
            alert(error.message);
        }
    }
}

calculatePrice();
*/

/*
let arr = [1, 2, 3];
console.log(arr);

arr.push(4, 5, 6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(-3, -2, -1, 0, 1);
console.log(arr);

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(-4, +2);
console.log(arr);
*/
// let action = "pla"

// switch (action){
//     case "play" :
//         console.log("Play the music")
//         break;   
//     case "pause" :
//         console.log("Pause the music")
//         break;
//     case "vol up" :
//         console.log("Volume increase by 1")
//         break;
//     case "vol down" :
//         console.log("Volume decrease by 1")
//         break;
//     case "off" :
//         console.log("Switch off the system")
//         break;

//     default :
//         console.log("unknown action")
//         break;
// }

// let age = 13

// if (age < 13){
//     console.log("child")
// }
// else if (age < 18){
//     console.log("mature child")
// }
// else if (age < 30){
//     console.log("early adult")
// }
// else if (age <50){
//     console.log("adult")
// }
// else if (age < 65){
//     console.log("mature adult")
// }
// else{ 
//     console.log("growing old")
// }


// function ageSegment(age){


// let output = age < 13 ? "child" :
//              age < 18 ? "mature child" :
//              age < 30 ? "early adult" :
//              age < 50 ? "adult" :
//              age < 65 ? "mature adult" :
//              "growing old"

// console.log(output)

// }

// ageSegment(2)
// ageSegment(14)
// ageSegment(31)
// ageSegment(51)
// ageSegment(66)


/*
function Parent(){
    console.log("parent function")

    function Child(){
        console.log("child function")

    return "hello from child fn"
    }
    return Child
}

let fnCall = Parent()

console.log(fnCall())

console.log(Parent()())

*/
/*
function Add(a,b){
    return `Sum of ${a} and ${b} is : ${a+b}`
}

console.log(Add(2,4))

*/

// let classRoom = [
//     ["Karan", 101, true, 92], 
//     ["Chhavi", 102, true, 90], 
//     ["Khushbu", 103, false, 30]
// ]

// let sum = 0
// for (let i = 0; i<classRoom.length;i++){
//     sum = sum + classRoom[i][3]
//     let x = classRoom[i]
    
//     for(let j = 0;j<x.length;j++){
        
//         if (x[j]===false){
//             x[j]=true 
//         }
//         console.log(x[j], i, j)
//     }
    
// }

// console.log("Avg of all the students are "+sum/classRoom.length)


/*
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let str = "";

for (let i = 0; i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        str += arr[j][i]
        console.log(arr[j][i])
    
    }
}
console.log(str)

/*


function printBorder(matrix){


for (let i = 0; i<matrix.length;i++){
    
    for (let j =0;j<matrix[i].length;j++){
        if(i == 0 || j==0 || 
            i == matrix.length-1 || j == matrix[i].length-1)
          {
            console.log(matrix[i][j])
         }
    }
}

}

printBorder(matrix1)
*/
/*

let matrix2 = [
    [1, 2, 3, 10, 13, 14], 
    [4, 5, 6, 11, 15, 16],
    [7, 8, 9, 12, 17, 18],
    [19, 20, 21, 22, 23, 24]
]

function printNonBorder(matrix){


for (let i = 0; i<matrix.length;i++){
    
    for (let j =0;j<matrix[i].length;j++){
        if(i == 0 || j==0 || 
            i == matrix.length-1 || j == matrix[i].length-1)
          {
            continue;
         }else {
            console.log(matrix[i][j])
         }
    }
}

}

printNonBorder(matrix2)
*/
/*
let matrix3 = [
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

function printPrimDiagnol(matrix){


for (let i = 0; i<matrix.length;i++){
       
       for (let j =0;j<matrix[i].length;j++){
           if(i == j)
           {
               console.log(matrix[i][j])
            }
       }
   }
    
}
    
printPrimDiagnol(matrix3)
*/

// let matrix3 = [
//     [1, 2, 3, 4, 5], 
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
// ]

// function printSecDiagonal(matrix){
//     for (let i=0;i<matrix.length;i++){
//         for ( let j=0;j<matrix[i].length;j++){
//             if (i+j == matrix.length-1){
//                 console.log(matrix[i][j])
//             }            
//         }
//     }
// }
// printSecDiagonal(matrix3)


// function printSecDiagonal(matrix){
//     for (let i =0;i<matrix.length;i++){
//         console.log(matrix[i][matrix.length-1-i])
//     }
// }    


// printSecDiagonal(matrix3)


/*
let obj = {
    fName : "Karan",
    lName : "Chaudhary",
    phoneNo : 9599991095, 
    subject : "Maths",
    hobby : "Swimming" 
}

//console.log(obj.lName)
//console.log(obj["phoneNo"])

obj["Marks"] = 98
obj.Mark = 90
delete obj.Mark
//delete obj["hobby"]
//console.log(obj)

for (let keyTest in obj){
    console.log(`${keyTest} : ${obj[keyTest]}`)
//    console.log(keyTest, ":", obj[keyTest])
}

*/
/*
let arr = ["a", "b", "c", "d", "e"]
let mappingObj = {}

for (let i=0; i<arr.length; i++){
    let value = arr[i]
    let key = i+1

    console.log(key, value)
    mappingObj[key] = value
}
console.log(mappingObj)

let obj = {}

obj.a = "apple"
obj.b = "ball"
obj.c = "cat"


console.log(obj)
*/
/*
let arr = ["a", "b", "c", "a", "a", "a", "a", "a", "a", "b", "b", "b", "c"]
let obj = {}

for (let i = 0; i<arr.length;i++){
  if (obj[arr[i]]) {
    obj[arr[i]]++
  }else{
    obj[arr[i]]=1
  }
   
//    console.log(obj)
}

console.log(obj)
*/
/*
let str = "masaischool"
let obj = {}

for (let i = 0; i<str.length;i++){
  if (obj[str[i]]) {
    obj[str[i]]++
  }else{
    obj[str[i]]=1
  }
   
//    console.log(obj)
}

console.log(obj)
*/
/*

let classRoom = [
    ["Karan", 101, "science", 92], 
    ["Chhavi", 102, "maths", 90], 
    ["Khushbu", 103, "sst", 30]
]

let redefinedClassRoom = [{
        Name : "Karan", 
        RollNo : 101,
        Subject : "science",
        Marks : 92 
    },
    {
        Name : "Chhavi", 
        RollNo : 102,
        Subject : "maths",
        Marks : 90    
    },
    {
        Name : "Khushbu", 
        RollNo : 103,
        Subject : "sst",
        Marks : 30 
    }
]

for (let i=0;i<redefinedClassRoom.length;i++){
    console.log(redefinedClassRoom[i])
}

*/
/*
let obj = {
    a : "password",
    b : 1234,
    c : "new password",
    d : true,
    e : [1, 2, 3, 4, 5],
    f : {
        aa : "str1",
        bb : "str2"
    }
}

console.log(obj.e[3])
console.log(obj.f.aa)
*/
/*
let obj = {
    greet : function(fName, lName){
        return `Hello ${fName} ${lName}`
    }
}

console.log(obj.greet("Karan", "Chaudhary"))  
*/
/*
let calculator = {
    Add : function(a,b){
        return a+b
    },
    Sub : function(a,b){
        return a-b
    },
    Mult : function(a,b){
        return a*b
    },


}

console.log(calculator.Add(1,1))
console.log(calculator.Sub(5,1))
console.log(calculator.Mult(3,2))
*/
/*

let fname = "Khushbu"
let lname = "Pagal"

let person = {
    fname : "Karan",
    lname : "Chaudhary",
    greet : function(){
        console.log(`Hello ${fname} ${lname}, greetings!!`)
        return `Hello ${this.fname} ${this.lname}, greetings!!`
        
    }
}

console.log(person.greet()) 
*/
/*

let calculator = {
    a : 1,
    b : 2,
    add : function(a, b){
        let value1 = a ? a : this.a
        let value2 = b ? b : this.b
        
        return value1+value2
//        if (a==undefined && b==undefined){
//            return this.a+this.b
//        }
//        else {
//            return a+b
//        }
    }
}

console.log(calculator.add(5, 6))
console.log(calculator.add(5))
*/
/*
let str = "masaischool"

console.log(str.search("i"))
console.log(str.search("school"))
console.log(str.search("#"))
*/
/*
let db = "karan'smasaischool"
function SearchFeatures (SearchElement){
    let value = db.search(SearchElement)

    return value == -1 ? "Result Not Found" : value
}

console.log(SearchFeatures("6"))
console.log(SearchFeatures("masai"))
*/

//let str = "    masai school    "
//let str = "masai school is very good for your it growth to learn new things"

//console.log(str.charAt(7))
//console.log(str[7])

// console.log(str)
// console.log(str.length)
// str = str.trim()
// console.log(str.length)
// console.log(str)

//console.log(str.split(" "))

// function ArrayMaker(str, condition){
//     return str.split(condition)
// }

// let jkl = "Hello@World@this@is@my@first@code"
// console.log(ArrayMaker(jkl, "@"))

// function StringMaker(arr, condition){
//     return arr.join(condition)
// }

// let arr1 = ["Hello", "how", "are", "you"]

// console.log(StringMaker(arr1, " "))

// let str = "home./images./img1"
// //str = str.trim()
// str = str.split("./")
// //str = str.join("->")
// console.log(str)
// console.log(str.includes("home"))
// console.log(str.includes("masai"))

// let arr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
// //arr = arr.slice(1,5)
// console.log(arr)

// narr = arr.splice(arr.length-5, 5 , "4", "5", "6", "7")
// console.log(arr)
// console.log(narr)

// function greetUser() {
//     let name = prompt();
//     if (name === null || name.trim() === ""){
//       console.log("Hello, Guest!");
//     }else {
//       console.log(`Hello, ${name}!`);
//     }
//    }

// greetUser()

// function calculatePrice() {
//     let price, discount;
    
//     function validateInput(input, type) {
//       if (isNaN(input) || input <= 0) {
//         console.log(`${type} should be a positive number. Please try again.`);
//         return false;
//       }
//       return true;
//     }
    
//     do {
//       price = prompt("Enter the Price:");
//       if (price === null) return;
//       price = parseFloat(price);
//     } while (!validateInput(price, "Price"));
    
//     do {
//       discount = prompt("Enter the discount:");
//       if (discount === null) return;
//       if (discount === "") {
//         discount = 10;
//         break;
//       }
//       discount = parseFloat(discount);
//     } while (!validateInput(discount, "Discount"));
    
//     const finalPrice = price - (price * discount)/100;
//     console.log(`The final price after applying a ${discount}% discount is: ${finalPrice.toFixed(2)}`);
//   }
  
//   calculatePrice();

// var num1 = prompt("Enter Starting Point");
// var num2 = prompt("Enter end point");
// var evenCount = 0;
// var oddCount = 0;
// for (let i=num1;i<=num2;i++){
//     if (i%2==0){
//         console.log(i);
//         evenCount++;
//     }else{
// //        console.log(i);
//         oddCount++;
//     }
// }
// console.log("Even count is "+evenCount);
// console.log("odd count is "+oddCount);


// function maxValue(arr){
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length>max){
//             max = arr[i].length
//         }
//     }
//     console.log(max)
// }

// let arr = ["hello25685694258", "how", "are", "you", "byee=myswthrt"]

// maxValue(arr)

// function calculator(a, b, operator){
//     if ("+"== operator){
//         return a+b;
//     }
//     else if ("-"== operator){
//         return a-b;
//     }
//     else if ("/"== operator){
//         return a/b;
//     }
//     else if ("*"== operator){
//         return a*b;
//     }
//     else{
//         return "invalid inputs"
//     }
// }

// console.log(calculator(2, 5, ""))

// function callPizzaHut(flag){
//     if(flag){
//         return "pizza deliverd"
//     }else {
//         return "payment fail pls try again"
//     }
// }
// let payment = prompt("Payment is done or not?");
// let pizza = callPizzaHut(payment);

// function deliveredPizza(operator){
//     if("pizza deliverd"== operator){
//         return "share with your friends"
//     }else {
//         return "no party"
//     }
// }
// console.log(pizza);
// console.log(deliveredPizza(pizza));

// function parent (){
//     console.log("parent function")

//     function child(){
//         console.log("child function")

//         return "hello from child function"
//     }
//     return child
// }

// console.log(parent()())

// let str = "masaischool"

//console.log(str.toUpperCase())
// for (let ele of str ){
//     console.log(ele)
// }

//console.log(true && 5 && true)