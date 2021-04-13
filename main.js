var mouseEvent = "";
var lastPositionOf_X, lastPositionOf_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "aqua";
width_ofline = 5;
Radius=20;
canvas.addEventListener("mousedown", myMouseDown)

function myMouseDown(e) {
    color = document.getElementById("color").value;
    width_ofline = document.getElementById("widthOfLine").value;
    Radius=document.getElementById("radius").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mousemove", myMouseMove)

function myMouseMove(e) {
    current_POS_X = e.clientX - canvas.offsetLeft;
    current_POS_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_ofline;
        ctx.arc(current_POS_X,current_POS_Y,Radius,0,2*Math.PI)
        ctx.stroke()
    }
    lastPositionOf_X=current_POS_X
    lastPositionOf_Y=current_POS_Y
}

canvas.addEventListener("mouseup",myMouseUp)

function myMouseUp(e) {
mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave",myMouseLeave)

function myMouseLeave(e) {
mouseEvent="mouseLeave"
}

function clear_Area() {
ctx.clearRect(0,0,canvas.width,canvas.height)
}