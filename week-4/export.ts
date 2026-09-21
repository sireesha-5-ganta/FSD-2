//(ii)Export and import modules
export class Student{
    rollno:string;
    name:string;
    branch:string;
    marks:number;
    constructor(rollno:string,name:string,branch:string,marks:number){
        this.rollno=rollno;
        this.name=name;
        this.branch=branch;
        this.marks=marks;
    }
    display():void {
        console.log("RollNo:",this.rollno);
        console.log("Name:",this.name);
        console.log("Branch:",this.branch);
        console.log("Marks:",this.marks);
    }
}