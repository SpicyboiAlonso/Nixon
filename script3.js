let main = document.getElementsByTagName("body")
main = main[0]
console.log(main);

let no = document.getElementById("horror")

let cantRun = function(){
    red.remove()
    rem.remove()
    var para = document.createElement("P");             
    para.innerText = "that option is no longer available";              
    document.body.appendChild(para);  
    no.play()
}

red.addEventListener("click", cantRun)



