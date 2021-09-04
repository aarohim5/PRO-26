class Paper {
    constructor(x,y){
      var options = {
        'isStatic':false, 
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x,y,23,options);
      this.radius = 23;
      this.image = loadImage('./sprites/paper.png');
      World.add(world,this.body);
     }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(254,0,253);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    }
}