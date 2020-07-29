class Paper {

    constructor(x,y) {

      var options = {

          'isStatic': false,
          'restitution':0.8,
          'friction':0.8,
          'density':0.8

      };

      this.body = Bodies.rectangle(x, y, 40,40, options);
      this.width = 40;
      this.height = 40;
      this.image = loadImage("paperball.png")
      
      World.add(world, this.body);
      
    }

    display(){

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(1);
      stroke("white");
      fill("white");
      ellipseMode(CENTER);
      ellipse(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,60,60);
      pop();

    }
  };