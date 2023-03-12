    const promise = new Promise((resolve, reject) => {
    resolve('Hola');
});

const cows = 15

const constCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve('Hay muchas vacas ' + cows);
    } else {
        reject('No hay muchas vacas');
    }
});

constCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finalmente');
});