let id = document.getElementById("input-number");
let Run =document.getElementById("button-compute");
let uu = document.getElementById("compute-result");
var ids = Number(620610796)
function calculate(){

     uu =  ids+Number(document.getElementById("input-number").innerHTML);
}
if(Run){
    Run.addEventListener('click',calculate);

  }

//your code here!