"use strict"     // treat all js code as newer version

//alert(3+#)   //we are using node js,not browser

// console.log(3+3)  //code readability shoud  be high 
// let ename ="histesh"
// let age=40
// let isLoggedin=true
// let state;

// //number  
// //bigint
// // String=""
// // Boolean= true or false 
// //null = standalone value
// //undefined = 

// let fullName="shweta star";
// age=24;
// price =1000;
// console.log(fullName)

// let a;
// console.log(a);


// {
//     let a=5;
//     //let a=7; // here redefine is **not posible** in one block
//     console.log(a);
// }
// {
//     let a=7;
//     // here redefine is **posible** in one block
//     console.log(a);
// }



// Number datatype
//let age = 24;
//let price =100.40;


//String datatype

//let fullName="shwet";


/*
const student= {
    //key:value;
     fullName:"shweta",
    age: 20,
    cgpa: 8.02,
    isPass:true
};
*/

/*

let age =18;

if(age>=18)
{
    console.log("you van vote");

}

if(age<18){
    console.log("not")
}



if(age<18){
    console.log("junior");
} else  if(age>60) {
    console.log("senior");

} else {
    console.log("middle");
}  

 let mode="dark";
let color;

if(mode==="w"){
    color = "black";
} else if (mode === "blue"){
    color = "blue"

} else if(mode === "pink"){
    color = "pink";
}else{
    color = "white";
}

console.log(color);


//for in loop



let student={
  name: "rahul kumar",
  age: 20,
  cgpa:7.5  
}


let num =prompt("enter a number");

if(num % 5 === 0){
    console.log(num,"is multiple of 5");
    
}else{
    console.log(num,"is not a multiple of 5");
}



/*

let student ={
    name: "rahul sharma",
    age:20,
    cgpa:7.5,
    isPass: true
};

for(let key in student){
    console.log("key=", key,"value=",student[key]);
}

*/




//print all even number 1 to 11


// for(let num=0;num<=100; num++)
// {
// if(num %2 !==0)
// {
//     console.log("num=",num);
// }

// } 



// let gameNum =25;
// let userNum = prompt("guess the game number:");

// while(userNum !=gameNum){
//   userNum = promt("you entered wrong no");
// }
// console.log("congrats!,you enter the right number");


// var a=10;
// console.log(a);
// var name = "hello";
// name=20;
// console.log(name);

// NaN: mathematical operation other than int 
//(one int one string )
//null:

let symbol1=Symbol("hello");
let symbol2=Symbol("hello");
console.log(symbol1==symbol2);
console.log();

//#primitive datatypes


//7 types :
// String ,Number,Boolean,null,undefined,Symbol,BigInt 

const score = 100 
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null

let userEmail=undefined;
let email;

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);

const bigNumber= 34543576654356754n


//reference type is called (nonprimitive )  and its returnn type is object
//arrays,objects,funtions


const heros=["shaktiman","nagraj","nagachaitanya"];


let myObject = {
    name:"ram",
    age:22

}

// function

 const myFunction=function()
{
  console.log("hello world");

  
}
r
//https://262.ecma-international.org/5.1/#sec-11.4.3


// typeOF(variable type)       Result

// Undefined                   undefined
// Boolean                     Boolean
// null                        Object
// number                      number
// String                     String
// object                     object function


    //      Symbol()	                                           Symbol.for()
    // प्रत्येक वेळेस नवीन Symbol तयार करतो	             ग्लोबल रजिस्टर मध्ये Symbol शोधतो
    // समान नाव असले तरी वेगळे Symbol असतात	         समान नाव वापरल्यास आधीचा Symbol परत मिळतो
    // Symbol.keyFor() वापरू शकत नाही	                Symbol.keyFor() ने त्याचे नाव मिळू शकते
    





















