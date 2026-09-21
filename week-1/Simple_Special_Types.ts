//(i)Understand simple types-number,string,Boolean
//1.Number
let a:number=10;
let b:number=20;
console.log("Sum:",a+b);
console.log(typeof (a+b));
//2.String
let message:string;
message="Hello TypeScript World";
console.log(message);
console.log(typeof message);
//3.Boolean
let spam:boolean=true;
console.log(typeof spam);
console.log("=======================");
//(ii)Special types-any,unknown,void
//any
let value:any=100;
console.log(value);
value="Hello";
console.log(value);
//unknown
let str:unknown="Typescript";
if(typeof str==="string"){
    console.log(str);
}
//void
function greet():void{
    console.log("Welcome");
}
greet();
