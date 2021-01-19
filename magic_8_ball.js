let userName = prompt('Please enter your user name', '<name goes here>');//asking for the users name
if (userName == null) { alert ('you did not enter a user name');}
else {alert (`'Hello, $userName`);}

userName ? console.log ('Hello ' + userName + '!' ) : console.log ('Hello!');//greeting the user

let userQuestion = prompt ('Please ask me a question', '<user question goes here>');//prompting the user to ask their question

console.log(userName + 'asked ');//returns the users question

let randomNumber = Math.floor(Math.random()*8);//generating a random number similar to shaking the 8 ball

let eightBall = ''

switch (randomNumber) {
  case 0 :
  console.log('It is certain');
  break;
  case 1 :
  console.log ('It is unclear');
  break;
  case 2 :
  console.log ('The odds are in your favor');
  break;
  case 3:
  console.log ('The odds are not in your favor');
  break;
  case 4:
  console.log ('The deck is stacked against you');
  break;
  case 5:
  console.log ('Try again later');
  break;
  case 6:
  console.log ('It does not look good');
  break
  case 7:
  console.log ('Only on the weekend');
  break;
  case 8:
  console.log('I cannot answer that right now');
  break;
}
console.log(eightBall);//the magic 8 balls answer