var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
console.log(chalk.green.bold("Welcome to Harry Potter quiz !\n"));
var userName = readlineSync.question(chalk.cyan("What is your name?\n"));

console.log("Welcome " + chalk.yellow(userName) + " Lets see how much you know about "+ chalk.bgCyan("Wizarding World") + " !\n");

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log(" ");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Your Answer: "+ userAnswer);
    console.log(chalk.green("right!"));
    score = score + 1;
  }
  else{
    console.log("Your Answer: "+ userAnswer);
    console.log(chalk.red("wrong!"));
  }
  console.log("Current Score: ",score);
    console.log(chalk.magentaBright("--------------------------------\n"));
}

var questions = [{
  question: "Q1) What's the name of the dog guarding the Sorcerer’s Stone?\na) Padfoot\nb) Fluffy\nc) Fang\nd) The Grim \n",
  answer: "b"
},{
  question: "Q2) In a Quidditch game, what type of ball is a Beater most likely to hit?\na) Nimbus\nb) Snitch\nc) Quaffle\nd) Bludger\n",
  answer: "d"
},{
  question: "Q3) What spell does Ron use against the troll in Harry Potter and the Sorcerer's Stone?\na) Stupefy\nb) Alohomora\nc) Wingardium Leviosa\nd) Expelliarmus\n",
  answer: "c"
},{
  question: "Q4) What kind of monster is released from the Chamber of Secrets?\na) Acromantula\nb) Boggart\nc) Basilisk\nd) Voldemort\n",
  answer: "c"
},{
  question: "Q5) Who is the Heir of Slytherin?\na) Harry Potter\nb) Tom Riddle\nc) Rubeus Hagrid\nd) Draco Malfoy\n",
  answer: "b"
},{
  question: "Q6) Sirius Black escapes on what kind of fantastic beast in the Prisoner of Azkaban?\na) Hippogriff\nb) Unicorn\nc) Phoenix\nd) Dragon\n",
  answer: "a"
},{
  question: "Q7) Who was Harry's love interest before Ginny Weasley?\na) Fleur Delacour\nb) Hermione Granger\nc) Cho Chang\nd) Luna Lovegood\n",
  answer: "c"
},{
  question: "Q8) Where does Dumbledore's Army practice?\na) Room of Requirement\nb) Great Hall\nc) Shrieking Shack\nd) Forbidden Forest\n",
  answer: "a"
},{
  question: "Q9) Who is the ghost of Gryffindor Tower?\na) Grey Lady\nb) Sir Nicholas\nc) Fat Friar\nd) Bloody Baron\n",
  answer: "b"
},{
  question: "Q10) What's the last Horcrux that has to be destroyed in order for Voldemort to die?\na) Ravenclaw's Diadem\nb) Hufflepuff's Cup\nc) Nagini\nd) Harry\n",
  answer: "d"
}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer); 
}

console.log(chalk.yellow("You SCORED " + score + " out of 10"));
if(score >= 7){
  console.log(chalk.green.italic("WoW! you know well 🦉⚡"));
}
else{
  console.log("Seems like you are a Muggle 😐😐");
}