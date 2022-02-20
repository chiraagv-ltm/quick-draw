function setup(){
canvas=createCanvas(500,300);
canvas.center();
background("white");


}

function clear_canvas(){
    background("white");
}
array_1=["pen","paper","book","bottle"]
random_no = Math.floor((Math.random()*array_1.length)+1)
Element_of_array = array_1[random_no]
document.getElementById("goal").innerHTML="Sketch To Be Drawn : " + Element_of_array;

timer_counter=0 ;
timer_check="" ;
drawn_sketch="" ;
answer_holder="" ;
score=0;