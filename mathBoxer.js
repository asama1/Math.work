class mathBoxer{
  constructor(){
    this.x = 80
    this.y = 320
    this.body = 35
    this.height = 70
    this.health = 130
    this.attack = false
    //let move1 = createButton('Bronze Punch');
  }
  
  show(){
    rect(this.x, this.y, this.body, this.height)
   // rect(this.x - 40, this.y - 80, this.body + 80, this.height- 30)
  }
  
  update(pos, high, tx, ty){
  
    fill(200, 20, 20)
    rect(this.x - pos, this.y - high, this.body + 80, this.height- 30)
    fill(20, 120, 20)
    rect(this.x - pos, this.y - high, this.health, this.height + -30)
    fill(1000)
    fill(0)
    text(this.health, this.x + tx, this.y - ty)
    fill(1000)
  }
  
  charge(other){
    
    if(this.x > 115 && this.health > 0 ){
     this.x -= 1
     
    } else if(other.health > 0){
      this.x += 250
     other.health -= 10
      console.log(other.health)
      } 
    }
      damage(){
        
    if (this.health > 0 && this.attack === true){
        this.health -= 1;
        console.log(this.health) 
}
}
  
  //moves(){
    //let move1 = createButton('Bronze Punch');
   // move1.position(10, 100)
  
 // }
  
}
