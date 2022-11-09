function setup() {
  player = new mather();
  enemy = new mather();
  teacher = new mather();
  
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  //rect(20, 20, 20, 20);
  
  
  player.show(40, 40, 45, 85)
  player.update()
  
  
  basicEnemy = enemy.show(90, 50, 30, 60)
  
  
}
