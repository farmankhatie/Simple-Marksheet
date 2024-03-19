import chalk from "chalk";
import { log } from "console";

// taking varialbes and assign them to values

let marksheet: string = chalk.bold.red.italic("Mark sheet of Farman [Monthly Test]")
let physics: number = 89
let maths: number = 92
let chemistry: number = 64
let english: number = 75

let total_marks: number = 400
let obtained_marks: number = (physics+maths+chemistry+english)
let percentage: number = (obtained_marks/total_marks)*100

//print all values

console.log(chalk.bgBlackBright(marksheet));
console.log(chalk.bgWhiteBright.bold("Physcis Marks:", physics));
console.log(chalk.bgWhiteBright.bold("Maths Marks:", maths));
console.log(chalk.bgWhiteBright.bold("Chemistry Marks:",chemistry));
console.log(chalk.bgWhiteBright.bold("English Marks:", english));
console.log(chalk.bgYellowBright.bold.white("Total Marks:", total_marks));
console.log(chalk.bgRedBright.white.italic("Your Percentage:",percentage.toFixed(2)+"%"));


// applying conditions 

if (percentage >= 80) {
    console.log("Grade A+, Congratulation Keep it up")
} else if (percentage >= 70) {
    console.log("Grade A Keep it up");
} else if (percentage >= 60) {
    console.log("Grade B Keep it up");
} else if (percentage >= 500) {
    console.log("Grade C Best try");
} else if (percentage >= 40) {
    console.log("Grade D Do hardwork");
} else if (percentage >= 70) {
    console.log("FAIL, aapka kusn nhi hosakta")
};