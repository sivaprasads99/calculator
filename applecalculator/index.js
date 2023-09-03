let screen=document.getElementById("screen")
function btnclicking(value){
    screen.value+=value;
}
function cancel(){
    screen.value="";
}
function result(){
    screen.value=eval(screen.value)
}