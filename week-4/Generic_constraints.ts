interface Student{
    rollno:number;
    name:string;
}
function display<T extends Student>(student:T):void{
    console.log("Student details");
    console.log("RollNumber:",student.rollno);
    console.log("Name:",student.name);
}
let s1={
    rollno:101,
    name:"Sireesha"
};
display(s1);