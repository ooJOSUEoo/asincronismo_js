const suma = (a, b) => a + b;

const calc = (a, b, callback) => {
    return callback(a, b);
}

console.log(calc(6, 2, suma));

setTimeout(() => console.log("hola"), 2000);

const grettin = (name) => console.log(`Hola ${name}`)

setTimeout(grettin, 2000,"Josue")