// function myFunc(...manyMoreArgs) {
//     console.log('manyMoreArgs', manyMoreArgs);
// }

function myFunc(number, ...manyMoreArgs) {
    console.log(number.length);
    console.log('manyMoreArgs', manyMoreArgs)
}

myFunc('one', 'two', 'three');