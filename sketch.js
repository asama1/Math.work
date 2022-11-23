newProblem = true;
let player;
let boxer;
function setup() {
  createCanvas(400, 400);
  player = new mathBoxer()
  boxer = new mathBoxer()
  
  
    let move1 = createButton('Bronze Punch');
    move1.position(10, 100)
  move1.mousePressed(fight(boxer))
  
  
  
  input = createInput();
  input.position(140, 120);

  button = createButton('Guess');
  button.position(input.x + input.width, 120);
  
  button.mousePressed(checkAnswer);
}
let question;
function draw() {
  background(220, 50, 70);
  //numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //console.log(floor(random(numbers.length)))
  //console.log(numbers)
  mathprogen()
  text(question  + " * " +   questions , 200, 100)
  
  boxer.show()
  boxer.charge(player)
  player.show()
 player.update(40, 50 , 8, 25)
  boxer.update(40, 100, 10, 75)
  //player.charge(5)
  player.damage()
  //boxer.damage()
 
}



function mathprogen(){
 
  
  if(newProblem === true){
    fill(1000)
    newProblem = false
    question = floor(random(1, 20))
    questions = floor(random(2, 30))
  } else {
    
  }
  
}

function checkAnswer(){
  let correctAnswer = question * questions
  if( input === correctAnswer){
    console.log('nice')
  } else {
    console.log('incorrect')
  }
  
}

function fight(enemy){
  enemy.health -= 10
  enemy.x += 10
}
