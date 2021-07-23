module.exports = function toReadable (number) {
    number = Number(number);
    if (number == 0) {
    return "zero";
    }

    let onenine = [0,"one", "two", "three", "four", "five", "six", "seven", "eight","nine",];
    let tennineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen",];
    let tenninety = [0, "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];

    let result = "";
    if (number > 99) {
    result = result + onenine[(number - (number % 100)) / 100] + " " + "hundred";
    if (number % 100 == 0) {
    return result;
    }
    }
    if (number % 100 < 20 && number % 100 > 9) {
        if (number > 100) {
        result = result + " ";
        }
        result = result + tennineteen[number % 10];
        return result;
        }
        if (number % 100 < 10 && number % 100 > 0) {
        if (number > 100) {
        result = result + " ";
        }
        result = result + onenine[number % 10];
        return result;
        }
        if (number % 100 > 19) {
        if (number > 100) {
        result = result + " ";
        }
        result = result + tenninety[((number % 100) - (number % 10)) / 10];
        if (number % 10 != 0) {
        result = result + " " + onenine[number % 10];
        }
        return result;
        }
        };
