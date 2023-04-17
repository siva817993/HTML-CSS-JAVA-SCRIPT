let a=document.getElementById('para1');
a.addEventListener("mouseover",OnMouseOver);
a.addEventListener("mouseout", OnMouseOut);

function OnMouseOver(){
    document.getElementById('para1').style.color="red";


}
function OnMouseOut(){
    document.getElementById('para1').style.color="green";
}