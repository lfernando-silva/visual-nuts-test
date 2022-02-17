/*
Write or describe an algorithm that prints the whole integer numbers to the console, start
from the number 1, and print all numbers going up to the number 100.
However, when the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for all
numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...).

*/
function print() {
    for (let i = 1; i <= 100; i++) {
        const isDivisibleBy3 = i % 3 === 0;
        const isDivisibleBy5 = i % 5 === 0;

        let str = '';

        if (!isDivisibleBy3 && !isDivisibleBy5) {
            str = `${i}`;
        } else {
            if (isDivisibleBy3) {
                str = 'Visual ';
            }

            if (isDivisibleBy5) {
                str += 'Nuts'
            }

            if (str.split(' ').length === 1) {
                str = str.replace(/ /g, '');
            }
        }

        console.log(str);
    }
}


/*
Some modifications could be done to improve this function:
1. Receive start and end limits as parameters, checking if "start" is lower than "end"
2. Check if "start" and "end" are actual numbers in this case
3. Determine some kind of max range to make sure this is will not enter in a undefined loop
4. Receive the divisors as parameters (considering if is the same rule as before: N, M or NxM)
5. Check if these divisors are actual numbers
6. Check if the divisors are different from 0
7. Define a default value if none or some values are not informed as parameters
*/

function improvedPrint({
    start = 1,
    end = 100,
    divisibleByN = 3,
    divisibleByM = 5
} = {}) {
    // Security checks
    const MAX_RANGE = 10000;
    const MIN_RANGE = -10000;

    if (isNaN(start)) {
        throw new Error("Start value must be a number");
    }

    if (isNaN(end)) {
        throw new Error("Start value must be a number");
    }

    if (isNaN(divisibleByN)) {
        throw new Error("Start value must be a number");
    }

    if (isNaN(divisibleByM)) {
        throw new Error("Start value must be a number");
    }

    if (start >= end) {
        throw new Error("Start value must be lower than end");
    }

    if (divisibleByN === 0 || divisibleByM === 0) {
        throw new Error('Divisors must to be different from 0');
    }

    if (start < MIN_RANGE) {
        throw new Error(`Start must to be greater than ${MIN_RANGE}`);
    }

    if (end > MAX_RANGE) {
        throw new Error(`End must to be lower than ${MAX_RANGE}`);
    }

    for (let i = start; i <= end; i++) {
        const isDivisibleByN = i % divisibleByN === 0;
        const isDivisibleByM = i % divisibleByM === 0;

        let str = '';

        if (!isDivisibleByN && !isDivisibleByM) {
            str = `${i}`;
        } else {
            if (isDivisibleByN) {
                str = 'Visual ';
            }

            if (isDivisibleByM) {
                str += 'Nuts'
            }

            if (str.split(' ').length === 1) {
                str = str.replace(/ /g, '');
            }
        }

        console.log(str);
    }
}

// ex calls:
// improvedPrint({
//    start: 90,
//    end: 105
//})
// improvedPrint()
