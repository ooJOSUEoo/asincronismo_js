const fnAsync = () => {
    return new Promise((resolve, rejects) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : rejects(new Error('Error!'));
    });
}

const anotherFN = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFN();
console.log('After');