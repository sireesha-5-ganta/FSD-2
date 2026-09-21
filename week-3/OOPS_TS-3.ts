//(iv)readonly and static members
//readonly:value can be assigned only once(declaration/constructor),cannot change.
//static:can be accesses using class name,shared by all objects.
class Student_1{
    readonly rollno:string;
    static college:string="SVECW";
    constructor(rollno:string){
        this.rollno=rollno;
    }
    display(){
        console.log("RollNo:",this.rollno);
        console.log("College:",Student_1.college);
    }
}
let s_1=new Student_1("24B01A4231");
s_1.display();
