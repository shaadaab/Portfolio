
var thm = document.getElementById("thm");

thm.onclick = function(){
    document.body.classList.toggle("light-theme")

    if(document.body.classList.contains("light-theme")){
        thm.innerHTML = "Turn lights OFF"
        
    } else{
        thm.innerHTML = "Turn lights ON"
    }
}