"use strict";
const names = ["ali", "reza"]; //string[]
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve");
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
// custom generic
function merge(objA, objB) {
    console.log(objB);
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "bijan", family: "ssas" }, { age: 10 });
const mergedObject1 = merge({ name: "bijan", family: "ssas" }, 30);
console.log(mergedObject);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("abc"));
console.log(countAndDescribe(["abc", "ss"]));
function extractAndConvert(obj, key) {
    return `value ${obj[key]} `;
}
extractAndConvert({ name: "kk" }, "name");
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesArr = ["bojan", "reza"];
// namesArr.push('ssd') shows error
