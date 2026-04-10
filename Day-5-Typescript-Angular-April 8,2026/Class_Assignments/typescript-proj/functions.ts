function add(x:number ,y:number): number {
    return x+y;
}
console.log(add(123,456));

function add2(x:number ,y:number){
    console.log(x+y);
}
add2(123,456);


function processNumber(num: number, callback: (n: number) => void): void {
    console.log("Processing number:", num);
    callback(num);
}


function double(n: number): void {
    console.log("Double of", n, "is", n * 2);
}


processNumber(5, double);

