class Rope{
    constructor(body1,body2,x,y)
    {
        this.x = x;
        this.y = y;
       var options = 
       {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            lenght : 30,
            pointB:{x:this.x,y:this.y}
       }
       //this.x = 0;
      //this.y = 0;

    this.rope=Constraint.create(options);

     World.add(world,this.rope);
     }
    display()
{
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    fill(0);
    strokeWeight(4);
    line(pointA.x,pointA.y,(pointB.x+this.x),(pointB.y+this.y));

}
}



