let flag=true;
function myfunction(){
    if(flag==false){
        document.getElementById("p1").innerHTML="A Paragraph.";
        console.log("Paragraph changed back")
        flag=true;
    }
    else{
        document.getElementById("p1").innerHTML="Paragraph Changed.";
        console.log("Paragraph changed ")
        flag=false;
    }

}