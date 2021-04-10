class SlingShot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 1
        }
        this.sling = Constraint.create(options);

        this.pointB = point2;
        World.add(world, this.sling);

    }
    display() {
       
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48, 22, 8);
            if (pointA.x < 220) {
                strokeWeight(8);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
            
            }
            else {
                strokeWeight(4);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
              
            }
            pop();
        }
    }


    fly() {
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

}
