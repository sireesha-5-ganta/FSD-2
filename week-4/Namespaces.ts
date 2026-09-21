//Code organization and reusable components
//(i)create and use namespace
namespace StudentDetails{
    export class Student{
        rollno:string;
        name:string;
        branch:string;
        constructor(rollno:string,name:string,branch:string){
            this.rollno=rollno;
            this.name=name;
            this.branch=branch;
        }
        display(){
            console.log("Student Details");
            console.log("Roll No:",this.rollno);
            console.log("Name:",this.name);
            console.log("Branch:",this.branch);
        }
    }
    export function college(){
        console.log("College :SVECW");
    }
}
let s1=new StudentDetails.Student("24B01A4231","Sireesha","AIML");
StudentDetails.college();
s1.display()
