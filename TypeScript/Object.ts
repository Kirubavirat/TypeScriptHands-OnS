//Object
const Address = {
    name : "kiruba",
    age : 23 
};

console.log(Address.name);

// Nested Objects
const Person ={
    id: 1,
    name: "Arun",
    age: 20,
    skils:["java","javascript","typescript"],
    Address:{
        city: "bangalore",
        phonenumber: 9876543210
    }
}
console.log(Person.Address);