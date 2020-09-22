class Paper{

    constructor(x, y) {

        var options = {
            'isStatic': true,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        
        this.body = Bodies.ellipse(x, y, radius, options);
        this.radius = 20;
        World.add(world, this.body);
    } 

    display(){

    } 

}    
