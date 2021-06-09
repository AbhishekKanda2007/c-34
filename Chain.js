class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5         
        }
        
       
        this.chain = Constraint.create(options);
        World.add(myWorld,this.chain);
    }
   
   show(){
        
        
     
            var pointA = this.chain.bodyA.position;
            var bodyB = this.chain.bodyB.position;
           
                strokeWeight(5);
                line(pointA.x , pointA.y, bodyB.x , bodyB.y);

               
    }
    
}