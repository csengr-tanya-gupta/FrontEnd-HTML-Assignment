let x = 5;
console.log(x);

let y:string = "typescript day 5";
console.log(y);

let h1 : {
    name: String;
    age : number;
};

interface Human{
    name: String;
    age : number;
}

let arr : number[] = [1,2,3];
let jk :[number]=[5];
let jkk : [number,number,number] = [6,7,8];
let tup: [number,boolean]=[6,true];

let task: [number,boolean,Human]=[1,false,{name: "tanya", age:21}];
console.log(jkk);
console.log(tup);
console.log(task);
console.log(arr);
console.log(jk);