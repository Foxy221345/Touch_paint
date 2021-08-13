canvas=document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

var mouse_event="";
var last_position_x,last_position_y;

var color;
var lineWidth;

document.getElementById('btnclear').addEventListener('click', function() {
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    console.log("heelo from mousedown!");
    color=document.getElementById("txtcolor").value;
    lineWidth=document.getElementById("txtLine_Width").value;
    
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}


canvas.addEventListener("mouseup", my_mouseup);

canvas.addEventListener( "mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        console.log("Last position of x and y coordinates=");
        console.log(" x = "+last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x, last_position_y );
        
        console.log("Current position of x and y coordinates=");
        console.log("Last position of x and y coordinates=");
        console.log(" x = "+current_position_of_mouse_x+"y="+current_position_of_mouse_y);

        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        
        ctx.stroke()
    
    }
    last_position_x= current_position_of_mouse_x;
    last_position_y= current_position_of_mouse_y;

}
new_width=screen.width;
new_height=screen.height;

if(new_width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

    color=document.getElementById("txtcolor").value;
    lineWidth=document.getElementById("txtLine_Width").value;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    console.log("my_touchmove");

    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.penWidth=lineWidth;

    ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x=current_position_of_touch_x;
    last_position_of_touch_y=current_position_of_touch_y;


}




