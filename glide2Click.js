var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var ctx = canvas.getContext("2d")

class Circle{
    constructor(x,y,radius,color){
        this.x = x 
        this.y = y
        this.radius = radius
        this.color = color
    }
//made by gurpreet
    draw(){
        ctx.fillStyle = this.color
        ctx.strokeStyle = "black"
        ctx.lineWidth = 10
        ctx.beginPath()
        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2*Math.PI
        )
        ctx.fill()
        ctx.stroke()
    }
    
//made by gurpreet
    glideTo(glideToX, glideToY, speedToGlide) {
        if (!this.isMoving) {
            function animate(circleInstance) {
                let dx = glideToX - circleInstance.x;
                let dy = glideToY - circleInstance.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 1) {
                    let stepX = dx / speedToGlide;
                    let stepY = dy / speedToGlide;
                    circleInstance.x += stepX;
                    circleInstance.y += stepY;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    circleInstance.draw();
                    requestAnimationFrame(() => animate(circleInstance));
                } else {
                    circleInstance.x = glideToX;
                    circleInstance.y = glideToY;
                    circleInstance.isMoving = false;
                }
            }
    
            this.isMoving = true;
            animate(this);
        } else {
            // Update target coordinates
            this.glideToX = glideToX;
            this.glideToY = glideToY;
        }
    }    
    
}
//made by gurpreet
addEventListener("click", function(event){
    circle1.glideTo(event.x,event.y,speed)
})
addEventListener("keydown", function(event){
    if(event.key == " "){
        speed = Number(prompt("Enter a Number for Speed (Larger is Slower)"))
    }
})
var speed = 14
var circle1 = new Circle(canvas.width/2,canvas.height/2,50,"red")
circle1.draw()
