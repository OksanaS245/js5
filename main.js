//task 1
const array1 = [123, 456, 789, 234, 567];
const array2 = [345, 678, 987, 321, 654];

    function separateAndSum (a, b) {
        const newArr = a.concat (b);
        let sum = 0;
        for (let i = 0; i < newArr.length; i++) {
            const checkVariable = newArr [i];
            if (!isNaN (checkVariable)) {
            sum  += Number (checkVariable);} else {sum += checkVariable}
        }
        return sum }

        console.log (separateAndSum (array1, array2))

//task 2
const arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor (arr2.length /2); i++) {
    let item = arr2 [i];
    arr2 [i] = arr2 [arr2.length - 1 - i];
    arr2 [arr2.length - 1 - i] = item;
}

console.log (arr2)

//task 3
const words = ['радар', 'анна', 'машина', 'шалаш', 'казан', 'варяг', 'потоп'];

function palindrome (arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr [i].split (''); // разбиваем слово на массив букв
        for (let j = 0; j < Math.floor (word.length / 2); j++) {
            let temp = word [j];
            word [j] = word [word.length - 1 - j];
            word [word.length - 1 - j] = temp;
        }
        if (arr [i] === word.join ('')) {
            console.log (arr [i] + ' - палиндром');
        } else {
            console.log (arr [i] + ' - не палиндром');
        }
    }
}

palindrome (words);

//task 4
const arr3 = [42, 17, -5, 100, 0, 8, -23, -55, -7, 91];
let maxNumber = arr3 [0];
for (let i = 1; i < arr3.length; i++) {
    if (arr3 [i] > maxNumber) {
        maxNumber = arr3 [i]
    }
}

console.log (maxNumber)

// task 5
let number = 87193201;
function numbers (a) {
    const b = a.toString ();
    const arr4 = b.split ('');
    for (let i = 0; i < arr4.length - 1; i++) {
        if (arr4 [i] % 2 == 1 && arr4 [i+1] % 2 == 1) {
            arr4.splice (i+1 , 0, ':');
            i++;
                    }
                }
                const c = arr4.join ('');
                return c;
}
console.log (numbers (number));

//task 6
const numbers2 = [1, 2, 3, 4, 5, -1, -2, -3];

function filterNumbers (arr5, conditionFunction) {
    const filteredArray = [];

    for (let i = 0; i < arr5.length; i++) {
        if (conditionFunction (arr5 [i])) {
            filteredArray.push (arr5 [i]);
        }
    }

    return filteredArray;
}

function isEven (number) {
    return number % 2 === 0;
}

function isPositive (number) {
    return number > 0;
}

const evenNumbers = filterNumbers (numbers2, isEven);
console.log ('Четные числа:', evenNumbers);

const positiveNumbers = filterNumbers (numbers2, isPositive);
console.log ('Положительные числа:', positiveNumbers);
