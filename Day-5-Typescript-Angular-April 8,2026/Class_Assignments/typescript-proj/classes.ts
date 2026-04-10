class cl {
    age: number;
    constructor(age: number = 21) {
        this.age = age;
    }
}

let c : unknown =100;
console.log(c);

c="hi";
console.log(c);

c=56.6;
console.log(c);

let d : any =100;
console.log(d);

d="hi";
console.log(d);

d=56.6;
console.log(d);

// Example of never type
function throwError(message: string): never {
    throw new Error(message);
}

// This function never returns
function infiniteLoop(): never {
    while (true) {
        // infinite loop
    }
}

//Usage
// throwError("Something went wrong"); // This would throw an error
// infiniteLoop(); // This would loop forever