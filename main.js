// Rock Paper Scissors!

const rps = (p1, p2) => {
  if (p1 === p2) {
    console.log("Draw!");
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    console.log("Player 1 won!");
  } else {
    console.log("Player 2 won!");
  }
};

rps("rock", "scissors");
rps("rock", "paper");
rps("scissors", "scissors");

// Sum Arrays

const sum = (nums) => {
  let summ = 0;
  for (let i = 0; i < nums.length; i++) {
    summ += nums[i];
  }
  console.log(summ);
};

sum([123, 1, 13]);

// Even or Odd

const eOo = (number) => {
    if(number % 2 === 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

eOo(4)
eOo(-5)

// Multiply the number

function jack(numbers) {
  function lengthCounter(number) {
    return number.toString().length; //es nawili gpt damiwera ;)))))
  }
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let finalnum = Math.pow(5, lengthCounter(numbers[i])); //math pow davserche ar maxsovda
    result.push(numbers[i] * finalnum);
  }
  console.log(result);
}

jack([123]);

// Sum without highest and lowest number

function jamiOghondmeore(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const trimmedNumbers = sortedNumbers.slice(1, -1);
  let sum = 0;
  for (let i = 0; i < trimmedNumbers.length; i++) {
    sum += trimmedNumbers[i];
  }
  console.log(sum);
}
jamiOghondmeore([4, 1, 6, 2, 8]);

// Convert a String to a Number!

const strTonum = (str) => {
  let num = Number(str);
  console.log(num);
};

strTonum("21");

// Convert a Number to a String!

const numTostr = (num) => {
  let str = num.toString();
  console.log(str);
};

numTostr(13);

// Powers of 2

function powersOfTwo(number) {
  const result = [];
  for (let i = 0; i <= number; i++) {
    result.push(Math.pow(2, i));
  }
  console.log(result.slice(-1));
}

powersOfTwo(5);

// Return Negative

const returnNeg = (num) => {
  if (num > 0) {
    console.log(num - 2 * num);
  } else if (num < 0) {
    console.log(num);
  } else {
    console.log(0);
  }
};

returnNeg(-15);
returnNeg(0);
returnNeg(15);

// Sum of positive

const sumofpos = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  let withoutnegative = [];
  let sumpos = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > 0) {
      withoutnegative.push(sorted[i]);
    }
  }
  for (let i = 0; i < withoutnegative.length; i++) {
    sumpos += withoutnegative[i];
  }
  return sumpos;
};

console.log(sumofpos([1, 310, -12, 3, -13]));