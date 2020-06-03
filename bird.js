class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
     
      
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, 70,70);
      pop();
    }
  };
