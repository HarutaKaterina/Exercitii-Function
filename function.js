//Exercitiul 1 
function kelvinToFahrenheit(kelvin) {
  const celsius = kelvin - 273;
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit = (Math.floor(fahrenheit));
}
console.log(kelvinToFahrenheit(293));

//Exercitiul 2 
function humanAgeInDogYears(myAge) {
  let earlyYears = 2;
  earlyYears *= 10.5;
  let laterYears = myAge - 2;
  laterYears *= 4;
  return humanAgeInDogYears = earlyYears + laterYears;
}
console.log(humanAgeInDogYears(33));


//Exercitiul 3 
function answerMyQuestion(userName, userQuestion) {
let randomNumber = Math.floor (Math.random () * 8);
  let eightBall = '';
  switch(randomNumber) {
    case 0:
      eightBall =  'It is certain';
      break;
      case 1:
        eightBall = 'It is decidedly so';
      break;
      case 2:
        eightBall = 'Reply hazy try again';
      break;
      case 3:
        eightBall =  'Cannot predict now';
      break;
      case 4:
        eightBall = 'Do not count on it';
      break;
      case 5:
        eightBall = 'My sources say no';
      break;
      case 6:
        eightBall = 'Outlook not so good';
      break;
      case 7:
        eightBall = 'Signs point to yes';
      break;
      default:
        eightBall = 'Invalid question';
      break;
  }
      return (`Hello, ${userName}! ${userQuestion} ${eightBall}.`);
}
console.log(answerMyQuestion('Katerina', 'Will I Win?'));

//Exercitiul 4
function raceTime(userAge, registeredEarly){
  let raceNumber = Math.floor(Math.random()* 1000);
  if(registeredEarly && userAge >18){
     raceNumber +=1000;
   }
   if(registeredEarly && userAge >18){
     console.log(`You will race at 09:30 am . Your race number is ${raceNumber}.`);
   }else if (!registeredEarly && userAge >18){
     console.log(`You will race at 11:00 am . Your race number is ${raceNumber}.`);
   }else if(userAge <18){
       console.log(`You will race at 12:30 am . Your race number is ${raceNumber}.`);
     } else if(userAge ===18){
       console.log(`You will race at 12:30 am . Your race number is ${raceNumber}.`);
     } else{
       console.log('Good luck to everyone!');
     }
}
console.log(raceTime(23, true));



