// enum is set of constant values
enum Roles  { ANALYST,  MANAGER, DEVELOPER, TESTER };
const Person ={
    id:1,
    name:"kiruba",
    roles: Roles.ANALYST
};

if(Person.roles === Roles.ANALYST){
    console.log("is Present");
}