class Bob {
    constructor(x,y) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1,
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.diameter = 70;
      
      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      stroke("brown");
      strokeWeight(4);
      ellipse(0,0, this.diameter,this.diameter);
      pop();
    }
  
  };