// basics
function add222(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    console.log(resultPhrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
}
let number1: number;
number1 = 3;
const number2 = 2.5;
const printResult = true;
const resultPhrase = "result is: ";
add222(number1, number2, printResult, resultPhrase);

// ----------------------------------------------------types---------------------------------------------------------------
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const test: ElevatedEmployee = {
  name: "bijan",
  privileges: ["server", "client"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = boolean | number;

type Universal = Combinable & Numeric;

// this function calls type Gaurd by type of
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

// this function calls type Gaurd by
function printEmployeeInformation(emp: UnknownEmployee) {
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

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | horse;

function moveAnimal(animal: Animal) {
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

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);
if (userInputElement) {
  userInputElement.value = "hi bijan";
}
// indx type
// if we do not knoew ho many feiled have, must use with [prop: string]
interface ErrorContainer {
  [prop: string]: string;
}
const errorBag: ErrorContainer = {
  1: "name is not valid",
  userName: "must start with capital",
};

// function overload
// last number is for return of function
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: number, b: string): string;
function add1(a: Combinable, b: Combinable) {
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
console.log(fetchUserData?.job?.description);

// nullish coalescing
const inputUser = undefined;
const inputUser1 = "";
const inputUser2 = null;
console.log(inputUser ?? "test"); //test
console.log(inputUser1 ?? "test"); //""
console.log(inputUser2 ?? "test"); //"test"

// -------------------------------------generics-------------------------------------------------------------------------
const names: Array<string> = ["ali", "reza"]; //string[]

const promise: Promise<string | object> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
type name = object | string | number;
// custom generic
function merge<T extends name, U>(objA: T, objB: U) {
  console.log(objB);
  return Object.assign(objA, objB);
}
const mergedObject = merge({ name: "bijan", family: "ssas" }, { age: 10 });
const mergedObject1 = merge({ name: "bijan", family: "ssas" }, 30);
console.log(mergedObject);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe("abc"));
console.log(countAndDescribe(["abc", "ss"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `value ${obj[key]} `;
}

extractAndConvert({ name: "kk" }, "name");
// --------------------------------------------------

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> = ["bojan", "reza"];
// namesArr.push('ssd') shows error
