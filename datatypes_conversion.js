let score="33abc"


console.log(typeof score);
//***************************************** */
let scoree=33


console.log(typeof scoree);
let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


 score=true;
 
console.log(typeof score);

//"33" => 33;
//"33abc" => NaN;
//"true" => 1; 

//false => 0;

let isLoggedin=1

let isLoggedIn = "true"; 
let booleanISLoggedIn = Boolean(isLoggedIn); 
console.log(booleanISLoggedIn); 

isLoggedin=" "
 isLoggedIn = "true"; 
 booleanISLoggedIn = Boolean(isLoggedIn); 
console.log(booleanISLoggedIn);

//1==true ; 0=false
// "" => false
//"hitesh" =>true

let someNumber= 33
let StringNumber=String(someNumber)
console.log(StringNumber);

console.log(typeof StringNumber);

//______________________________________________________________________________________________
console.log("_____________________");

let myVar;
myVar=34;
console.log(myVar);

myVar=String(34);


console.log(myVar,(typeof myVar));
let booleanVar=true;
//for example u know js then write yes that means true

// console.log(booleanVar,(typeof booleanVar));

let date =new Date();
console.log(date,(typeof date));

// length of array means :number of Elements(total elements)

// length of String means : number of charachter(display all elements)


let arr= [1,2,3,4,5];
console.log(arr,(typeof arr));  //[ 1, 2, 3, 4, 5 ] object

let arr1= String([1,2,3,4,5]);
console.log(arr1,(typeof arr1));  //1,2,3,4,5 string

let i=8;
console.log(i.toString());  //8

let num=10;
console.log(num.toString(20));   //a

console.log(num.toString(8));  //12

console.log(num.toString(16));  //a

let j=false;
console.log(j.toString());


let k=75;
console.log(k.toString());

let stri=Number("3434");
stri=Number("3434d");
stri=Number(false);
stri=Number([1,2,3,4,5,6,7,8,9,]);   



let number=parseInt('34.098');
console.log(number.toFixed(2),(typeof number));


number=Number('34.098');
console.log(number,(typeof number));

let mystr=Number("698");
let mynum=34;

console.log(mystr + mynum);

