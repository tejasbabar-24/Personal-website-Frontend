console.log("Hello Tejas is Here");
/*var is  global scope*/
var a= 10;
var b = 12;
var c = a+b;
console.log('Addition of a and b : ',c);

/*let is block scope */
{
   let i = 34;
   console.log(i);

}
//Const is used to assign constant value to the variable

const pi = 143;
console.log(pi);

/*Defining Function */
function fake_it()
{
    console.log("Function executed.");

}

/*Function Call */
fake_it();

function add(a,b)
{
  return a +b;
}

console.log(add(2,3));

/*If else if Condition*/
var num = 10;

if(num>0)
{
    console.log("Number is Positive");
}
else if(num<0)
{
    console.log("Number is Negative");
}
else
{
    console.log("Numer is zero");
}

/*Increment Decrement i++,i--,++i,--i*/
var ab = 5;
console.log(++ab);
//For loop statement

for(let i=1; i<=10;i++)
{
    console.log("Iteration " + i);
}

/*Array in JS*/

let fruits = ["Apple","Cherrey","Banana","Guva"];
fruits.push("dragon Fruit");
fruits.push("Grapes");
fruits.pop();
console.log(fruits);

let person = {name:"Alen", age:25};
person.age = 26;
console.log(person);