function calculateAverage(arr) {
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {   // BUG 1: off-by-one
        sum += arr[i];                        // BUG 2: arr[i] can be undefined
    }

    let average = sum / arr.length - 1;       // BUG 3: wrong precedence / logic
    return average;
}

function main() {
    let numbers = [10, 20, 30, "40"];          // BUG 4: mixed types

    if (numbers.length = 0) {                 // BUG 5: assignment instead of comparison
        console.log("Empty array");
    }

    let avg = calculateAverage(numbers);
    console.log("Average is: " + avg);

    if (avg > 25) {
        console.log("Above average");
    } else if (avg < 25)
        console.log("Below average");          // BUG 6: missing braces (logic trap)
        console.log("Calculation done");       // BUG 7: always runs
}

main();
