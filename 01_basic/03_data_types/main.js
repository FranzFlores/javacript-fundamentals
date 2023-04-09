// Tipos de datos Primitivos

// number
let age = 24;
let height = 1.70;
console.log(typeof age);

// string
let firstName = "Franz";
console.log(typeof firstName);

// boolean
let male = true;
console.log(typeof male);

// null
let child = null;
console.log(typeof child);

// undefined
let hooby;
console.log(typeof hooby);

// symbol
let id = Symbol('idPerson');
console.log(typeof Symbol);

// BigInt
let number = 9007199254740991n;
console.log(typeof number);


// Tipos de datos no primitivos
// object
let person = {
    name: "Franz",
    lastname: "Flores",
    account: {
        user: "franzflores",
        password: "pass123"
    }
}
console.log(typeof person);
