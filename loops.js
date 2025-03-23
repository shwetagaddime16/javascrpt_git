// let a=0;
// while(a<=10)
// {
//     console.log(a);
//     a++;
// }



// let a=10;
// while(a<=10)
// {
//     console.log(a);
//     a++;
// }
//****************** printing number using while loop********************

// let numbers=prompt("enter the number");
// let n =parseInt(numbers)
// let i=1;
// let sum=0;

// while(i<=n)
// {

//     sum+=i;
//     i++
// }
// console.log(sum);

//**********************WHILE-LOOP--sum of even and odd number********************************* */

// let number=prompt("enter the number");
// let n=parseInt(number)
// let i=1;
// let esum=0,osum=0;

// while(i<=n)
// {
//     if(i%2==0)
//     {
//         esum+=i;
//     }

// else{
//     osum+=i;
// }
// i++;
// console.log(`esum =${esum},osum = ${osum}`);

// }

//****************************do while************************************** */

// let a;
// do{
// a=prompt("enter the number");
// }while(a<=0);

// console.log(a);

//****************TABLE-using- FOR LOOP *************************************** */
// let table=prompt("enter the number");
// let n=parseInt(table);
// for(let i=1;i<=20;i++)
// {
//     console.log(` ${n} X ${i}=${n * i} `);
    
// }

//**************************PRIME NUMBER************ ******************/
// let table=prompt("enter the number");
// let n=parseInt(table);
// for(i=2;i<=n;i++)
// {
//     let prime=true
//     for(let j=2;j<i;j++)
//     {
//       if(i%j===0)
//       {
//         prime==false;

//       }

//     }
//     if(prime)
//     {
// console.log(i);
//  }

// }


//***********************numbers divided by 3 and 5***************************************** */
let table=prompt("enter the number");
 let n=parseInt(table);
 for(i=0;i<=n;i++)
 {
    if(i%3==0 && i%5==0)
    {
        console.log(i);
        
    }
 }


//****************divide by 3 seperate it and sum it and didvide by 5 seperate it and sum it ***********/
// let table = prompt("Enter the number");
// let n = parseInt(table); // Convert to integer

//   let num1=0,num2=0;
//   for(let i=0;i<=n;i++)
//      {
//         if(i%3==0)
//         {
//            num1=num1+i
//             console.log(num1);
            
//         }
//         else if(i%5==0){
//             num2=num2+i
//             console.log(num2);
//         }
        
//      }
