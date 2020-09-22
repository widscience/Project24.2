class Bin{

    constructor(x, y, width, height,){

    this.body = Bodies.rectangle(x, y, width, height);
    World.add(world, this.body);

    }
    
    display(){
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);    
    }

}