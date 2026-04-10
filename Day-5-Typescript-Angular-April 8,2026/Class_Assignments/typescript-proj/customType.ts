type customType={

    date: number | string;
    name: string;
    isActive: boolean;
}


//old method, we dont go with this method
enum Color {
    Red,
    Black,
    Gold
}

//instead use literal type
type Color2 = "Red" | "Black" | "Gold";

let c: Color2 = "Red";
console.log(c);

//c="jk";
//wont work because c can only be "Red", "Black", or "Gold"
console.log(c);

