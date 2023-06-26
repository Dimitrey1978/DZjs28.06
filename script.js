//Самостоятельные из презентации "Булевы значения" сделал в предыдущей работе
// Выразения и условия - ниже

// FizzBuzz
console.log("\n", "------------------FizzBuzz---------------------", "\n");

function fizzBuzz(begin, end) {
  for (let i = begin; i <= end; i++) {
    if (!(i % 15)) console.log("FizzBuzz");
    else if (!(i % 5)) console.log("Buzz");
    else if (!(i % 3)) console.log("Fizz");
    else console.log(i);
  }
}

fizzBuzz(1, 15);

// Дана строка. Необходимо написать функцию, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.

console.log(
  "\n",
  "------------------Замена регистра---------------------",
  "\n"
);
function alternateCase(string) {
  const row = string.split("");
  let symbol = "";
  let symbolReflection = "";

  for (i = 0; i < string.length; i++) {
    symbol = row[i];
    if (symbol.toLowerCase() === symbol)
      //если в нижнем регистре
      symbolReflection += symbol.toUpperCase();
    else symbolReflection += symbol.toLowerCase(); //иначе возращаем в нижнем регистре
  }

  return symbolReflection;
}

console.log(alternateCase("qwerty")); // 'QWERTY'
console.log(alternateCase("QWERTY")); // 'qwerty
console.log(alternateCase("QwErTy")); // 'qWeRtY

// task. Получение цены билета
console.log("\n", "------------------Цена билета---------------------", "\n");

function getTicketPrice(age) {
  if (age < 18 || age > 60) {
    return 1000;
  } else {
    return 2000;
  }
}

// Sample usage - do not modify
console.log(getTicketPrice(15)); // 1000
console.log(getTicketPrice(30)); // 2000
console.log(getTicketPrice(45)); // 2000
console.log(getTicketPrice(75)); // 1000

// task. Просмотр блога
console.log(
  "\n",
  "------------------Просмотр блога---------------------",
  "\n"
);

function canPreviewArticle(type, isAuthor) {
  if (type === "admin" || isAuthor) {
    return true;
  } else {
    return false;
  }
}

// Sample usage - do not modify
console.log(canPreviewArticle("admin", false)); // true
console.log(canPreviewArticle("admin", true)); // true
console.log(canPreviewArticle("user", true)); // true
console.log(canPreviewArticle("user", false)); // false

// task. Пользовательский план
console.log(
  "\n",
  "------------------Пользовательский план---------------------",
  "\n"
);

function getUserPlan(hasPaid, completedChallenges) {
  if (hasPaid && completedChallenges >= 10) {
    return "Pro";
  } else {
    return "Trial";
  }
}

// Sample usage - do not modify
console.log(getUserPlan(true, 5)); // "Trial"
console.log(getUserPlan(true, 20)); // "Pro"
console.log(getUserPlan(false, 5)); // "Trial"
console.log(getUserPlan(false, 20)); // "Trial"

// Codewars
console.log(
  "\n",
  "------------------Индекс массы тела---------------------",
  "\n"
);

function bmi(weight, height) {
  const bodyMassIndex = weight / Math.pow(height, 2);
  if (bodyMassIndex <= 18.5) {
    return "Underweight";
  } else if (bodyMassIndex <= 25.0) {
    return "Normal";
  } else if (bodyMassIndex <= 30.0) {
    return "Overweight";
  } else if (bodyMassIndex > 30.0) {
    return "Obese";
  } else return "Какая-то хрень. Убедитесь, что исходные верные";
}

console.log(bmi(80, 1.8)); // "Normal"
console.log(bmi(90, 1.75)); // "Overweight"
console.log(bmi(70, 1.5)); // "Obese"
console.log(bmi(73, 1.78)); // свой проверить
console.log(bmi("ффф", 1.78)); // моделируем неверные данные
console.log(bmi());

// Вам дано число, которое вы должны сделать отрицательным. А может быть, число уже отрицательное?
console.log(
  "\n",
  "------------------Отрицательное число---------------------",
  "\n"
);

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else if (num > 0) {
    return -num;
  } else {
    return 0;
  }
}

console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0
console.log(makeNegative(0.12)); // -0.12

//Промокод из кодварс
console.log("\n", "------------------Промокод---------------------", "\n");

function isPromoCodeValid(code) {
  if (code.length >= 5 && code.length <= 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isPromoCodeValid("abcde"));
console.log(isPromoCodeValid("abcdefghij"));
console.log(isPromoCodeValid("abc"));
console.log(isPromoCodeValid("ab"));

// Повторяющиеся символы

console.log(
  "\n",
  "------------------Повторяющиеся символы---------------------",
  "\n"
);

function duplicateCount(text) {
  if (text) {
    let textW = text.toLowerCase().split("").sort().join("");
    let counter = 0;
    for (let i = 0; i < text.length - 1; i++) {
      if (textW[i] == textW[i + 1] && textW[i] !== textW[i - 1]) {
        counter++;
      }
    }
    return counter;
  } else return 0;
}

console.log(duplicateCount(""));// 0
console.log(duplicateCount("abcde"));// 0
console.log(duplicateCount("aabbcde"));// 2
console.log(duplicateCount("aabBcde")) // 2
console.log(duplicateCount("Indivisibility"));// 1
console.log(duplicateCount("Indivisibilities"));// 2

console.log(
  "\n",
  "------------------Сумма чисел, делящихся на 3 и на 5---------------------",
  "\n"
);
function solution(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (!(i % 5) || !(i % 3)) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10)); // returns 23 as 3 + 5 + 6 + 9 = 23
