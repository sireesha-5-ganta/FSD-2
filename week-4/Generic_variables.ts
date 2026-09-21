class Student<T>{
    regdno:string;
    name:string;
    value:T;
    constructor(regdno:string,name:string,value:T){
        this.regdno=regdno;
        this.name=name;
        this.value=value;
    }
    display():void{
        console.log("Register Number:",this.regdno);
        console.log("Name:",this.name);
        console.log("Value:",this.value);
    }
}
let s1=new Student<number>("101","Sireesha",97);
let s2=new Student<string>("102","Lakshmi","Excellent");
s1.display();
s2.display();