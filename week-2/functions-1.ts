//1.Function with parameter Types& Return Types
function add (a:number,b:number):number{
    return a+b;
}
console.log(add(10,20));
function multiply(a:number,b:number):number{
    return a*b;
}
console.log(multiply(5,3));
function greet(name:string):string{
    return "Hello "+name;
}
console.log(greet("Sireesha"));
//2.Optional&Default Parameters
function display(name:string,age?:number):void{
    console.log(name,age);
}
display("Lakshmi");
display("Lakshmi",25);
function welcome(name:string="student"):void{
    console.log("Welcome "+name);
}
welcome();
welcome("Lakshmi");
function square(num:number=5):number{
    return num*num;
}
console.log(square());
console.log(square(5));
