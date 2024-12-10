function fizz_buzz (num) {
     
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}

console.log(fizz_buzz(2.5));

module.exports = {
    fizz_buzz, 
};
