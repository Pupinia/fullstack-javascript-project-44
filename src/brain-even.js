import readlineSync from "readline-sync";

const isEven = (num) => num % 2 === 0;

let countOfCorrectAnswers = 0;

export default () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (countOfCorrectAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question(`Your answer: `);

    if (
      (answer === "yes" && isEven(randomNumber)) ||
      (answer === "no" && !isEven(randomNumber))
    ) {
      console.log("Correct!");
      countOfCorrectAnswers += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was ${
          isEven(answer) ? "'yes'" : "'no'"
        }.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
