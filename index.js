// your JS here
function changeButton(){
    let block_id = document.getElementById("block_id").value;
    let color_id = document.getElementById("colour_id").value;
    let wall = document.getElementById(block_id);
    if(block_id>=1 && block_id<=9){
    wall.style.backgroundColor = color_id;   
    }
    document.getElementById("block_id").value="";
     document.getElementById("colour_id").value = "";
}
function resetButton(){
    document.querySelectorAll(".container div").forEach((element)=>element.style.backgroundColor="transparent");
        document.getElementById("block_id").value="";
     document.getElementById("colour_id").value = "";
}