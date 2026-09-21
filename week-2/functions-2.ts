//3.Arrow Functions
const add=(a:number,b:number):number =>a+b;
console.log(add(10,20));
const square=(n:number):number=>n*n;
console.log(square(5));
const greet=(name:string):void =>{
    console.log("Hello "+name);
};
greet("Sindhu,Sandhya");
//4.Rest Parameters
function sum(...nums:number[]):number{
    let total=0;
    for(let n of nums)
        total+=n;
    return total;
}
console.log(sum(10,20,30));
function printNames(...names:string[]):void{
    console.log(names);
}
printNames("Ravi","Sam","Rukh");
function largest(...nums:number[]):number{
    return Math.max(...nums);
}
console.log(largest(10,20,30,50));
//5.Convert Function into Arrow Functions
function addition(a1:number,b1:number):number{
    return a1+b1;
}
const addi=(a:number,b:number):number=>a+b;
console.log(addi(10,20))
