class Boat{
    constructor(x,y,width,height,boatPos){
        this.body = Bodies.rectangle(x,y,width.height);
        this.width = width;
        this.height = height;
        this.boatPos = boatPos;
        this.image = loadImage("assets/boat.png");
        World.add(world,this.body);
    }

    show(){
        var bodyPos = this.body.position;
        var bodyAngle = this.body.angle;
        push();
        translate(bodyPos.x,bodyPos.y);
        rotate(bodyAngle);
        imageMode(CENTER);
        image(this.image,0,this.boatPos,this.width,this.height);
        pop();
    }
}