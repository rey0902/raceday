let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
let runnersAge = 15;

if (earlyRunner && runnersAge > 18) {
  raceNumber = (Math.floor(Math.random() * 1000) + 1000);
} else {
  raceNumber = Math.floor(Math.random() * 1000);
}

if (earlyRunner && runnersAge > 18) {
  console.log(`You will be racing at 9:30. Your race number is ${raceNumber}.`);
} else if (earlyRunner === false && runnersAge > 18) {
  console.log(`You will be racing at 11:00 am. Your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will be racing at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please go to the registration desk for assistance.')
}
