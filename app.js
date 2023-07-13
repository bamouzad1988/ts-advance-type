"use strict";
var _a;
const test = {
    name: "bijan",
    privileges: ["server", "client"],
    startDate: new Date(),
};
// this function calls type Gaurd by type of
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// this function calls type Gaurd by
function printEmployeeInformation(emp) {
    if ("privileges" in emp) {
        console.log("privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
    if ("name" in emp) {
        console.log("name: " + emp.name);
    }
}
printEmployeeInformation(test);
printEmployeeInformation({ name: "reza", startDate: new Date() });
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
// type casting
const para = document.getElementsByClassName("output");
// const userInputElement = document.getElementsByClassName(
//   "user-input"
// )! as unknown as HTMLInputElement;
const userInputElement = (document.getElementById("user-input"));
if (userInputElement) {
    userInputElement.value = "hi bijan";
}
const errorBag = {
    1: "name is not valid",
    userName: "must start with capital",
};
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add1(4, 5);
const result1 = add1("sdsd", "sdsd");
const result2 = add1(4, "sdsd");
// optional chaining
const fetchUserData = {
    id: 1,
    name: "bijan",
    job: { title: "developer", description: "my own website" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.description);
// nullish coalescing
const inputUser = undefined;
const inputUser1 = "";
const inputUser2 = null;
console.log(inputUser !== null && inputUser !== void 0 ? inputUser : "test"); //test
console.log(inputUser1 !== null && inputUser1 !== void 0 ? inputUser1 : "test"); //""
console.log(inputUser2 !== null && inputUser2 !== void 0 ? inputUser2 : "test"); //"test"
