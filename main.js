// Project #1: Trip Planner
function planTrip(distance = 0, avgSpeed = 0) {
  if (!distance || !avgSpeed) return; // skips function call if input is invalid or empty

  let eta = distance / avgSpeed;
  let result = eta * 60;

  // return result;
  console.log(result);
}

/*---------------------------*/

// Project #2: The Snail in the Well
function snailInTheWell(depth = 0) {
  if (!depth) return; // skips function if parameters are empty
  const getResult = ((depth) => {
  let result = 0; 
  let day = 7; 
  let night = -2; 
  let counter = 0;
  
  while (true) {
    if (depth > result) {
      result += day;
      counter++;
    } else {
      break;
    }

  if (depth > result) {
    result += night
  } else {
      break;
    }
  }
  return counter;
});

const result = getResult(depth);
console.log(result)
}

snailInTheWell(55);

/*---------------------------*/

// Project #3: Currency Converter
function convert(amount = 0, rate = 0) {
  return amount * rate
}

/*---------------------------*/

// Project #4: Contact Manager
function contact(name = "", number = 0) {
  if (!name || !number) return "Error: Please enter a valid input!" // This could easily be attached to an event listener for a browser alert, etc.   
  
  this.name = name;
  this.number = number;
  this.print = print;
}
  
function printContact() {
  // return `${this.name}: ${this.number}`;
  console.log(`${this.name}: ${this.number}`);
}
  
let amy = new contact("Amy", 987654321);
let david = new contact("David", 12345);

amy.printContact();
david.printContact();

/*---------------------------*/

// Project #5: Store Manager
function storeManager(amount = 0) {
  const prices = [98.99, 15.2, 20, 1026];
  let sum = [];

  prices.forEach((price) => {
    sum.push(price + amount);
  });
  // return sum;
  console.log(sum);
}

storeManager(10);
storeManager(-10);

/*---------------------------*/

// Project #6: Words 
class Add {
  constructor(...words) {
      this.words = words;
  }

  printWords() {
    let i = 0;
    let text = "";

    while (i <= this.words.length - 1) {
      text += `$${this.words[i]}`;
      i++;
    }

    console.log(text + "$");
  }
}

let words1 = new Add("hehe", "hoho", "haha", "hihi", "huhu");
let words2 = new Add("this", "is", "awesome");
let words3 = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");

words1.printWords();
words2.printWords();
words3.printWords();