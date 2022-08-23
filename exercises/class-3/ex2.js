function printObject(user) {
    let person = {
        name: "Wade",
        age: 38,
        occupation: "English teacher"
    }
    
    if (person.name == user) {
        console.log(`${person.name} is ${person.age} and works as a ${person.occupation}.`)
    }
}