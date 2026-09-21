//(iii)Demonstrated public,private,protected
//public-can be accessed anywhere ,private-can be accessed only inside the same class,protected-can be accessed inside the class and subclass but not outside the class
class Person{
    public name:string="Sireesha";
    private regdno:string="24B01A4231";
    protected city:string="vijayawada";
    display(){
        console.log("Name:",this.name);
        console.log("Regd.No:",this.regdno);
        console.log("City:",this.city);
    }
}
class Student extends Person{
    show(){
        console.log("Name:",this.name);
        console.log("City:",this.city);
        //console.log(this.regd.no); Error private is accessed inside the same class only
    }
}
let s=new Student();
s.display();
s.show();
