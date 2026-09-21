//(i)creating class with properties and methods
class Student{
    //properties
    name:string="Sireesha";
    Regd_No:string="24B01A4231";
    //Methods
    display(){
        console.log("Name:",this.name);
        console.log("Regd_No:",this.Regd_No);
    }
}
let s=new Student();//new object creation
s.display();
console.log("===========================");
//(ii)Implement Constructor
class Student1{
    name_1:string;
    regdno:string;
    constructor(name_1:string,regdno:string){
        this.name_1=name_1;
        this.regdno=regdno;
    }
    display(){
        console.log(this.name_1,this.regdno);
    }
}
let s1=new Student1("Ganta.Sireesha","24B01A4231");
s1.display();
