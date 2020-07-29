class GreenIMG {
  
    constructor(x,y,width,height) {

      var options = {

          'isStatic': true,
          'restitution':0.8,
          'friction':0.8,
          'density':0.8

      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      
    }

    display(){

      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,1183,350,285,290);

    }
  };