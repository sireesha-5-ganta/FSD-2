function studentInfo<T>(rollno:number,name:string,data:T):void {
    console.log("Student Information:");
    console.log("RollNumber:",rollno);
    console.log("Name:",name);
    console.log("Data:",data);
}
    studentInfo<number>(101,"Rekha",90);
    studentInfo<string>(102,"Rakul","pass");
    studentInfo<boolean>(103,"Navya",true);
