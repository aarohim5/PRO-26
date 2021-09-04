class Logs {
    constructor( x, y){
          var options = {
             'isStatic':true
            // 'friction':1,
             //'density':0.1
         }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height =213;
        this.thickness = 20;
         this.Bottombody = Bodies.rectangle(this. x,this. y,this. width, this.thickness ,options);
         this.Leftwall = Bodies.rectangle(this.x-this.wiidth/2,this.y-this.height/2,this.width,this.height,options);
         this.Rightwall = Bodies.rectangle(this.x+this.wiidth/2,this.y-this.height/2,this.width,this.height,options);
        //  this.width = width;
        //  this.height = height;
         this.image = loadImage('./sprites/dustbingreen.png');
         World.add(world, this.Bottombody);
         World.add(world, this.Leftwall);
         World.add(world, this.Rightwall);
    }
    display(){
       var posB = this.Bottombody.position;
       var posL = this.Leftwall.position;
       var posR = this.Rightwall.position;
       
       push();
       translate(posL.x,posL.y);
       rectMode(CENTER);
       fill("white");
      rotate(this.angle);
      // rect(pos.x, pos.y, this.width, this.height);
      pop();
      push();
       translate(posR.x,posR.y);
       rectMode(CENTER);
       fill("white");
      rotate(-1*this.angle);
      // rect(pos.x, pos.y, this.width, this.height);
      pop();
      push();
       translate(posB.x,posB.y+10);
       rectMode(CENTER);
       fill("white");
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image,0,-this.height/2,this.width,this.height);
      // rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
}