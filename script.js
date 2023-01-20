function szerkesztheto(){
    egyikbefogo=document.getElementById("egyikbefogo").value
    masikbefogo=document.getElementById("masikbefogo").value
    atfogo=document.getElementById("atfogo").value
    if (Math.pow(egyikbefogo,2)+Math.pow(masikbefogo,2)==Math.pow(atfogo,2)){
        alert("Szerkeszthető");
    } else {
        alert("Nem szerkeszthető");
    }
}
function random(){
    document.getElementById("egyikbefogo").value= Math.round((Math.random(10, 101)*100))
    document.getElementById("masikbefogo").value= Math.round((Math.random(10, 101)*100))
    document.getElementById("atfogo").value= Math.round((Math.random(10, 101)*100))
}
function atfogo(){
    egyikbefogo=document.getElementById("egyikbefogo").value
    masikbefogo=document.getElementById("masikbefogo").value    
    document.getElementById("atfogo").value= (Math.sqrt(Math.pow(egyikbefogo,2)+Math.pow(masikbefogo,2))).toFixed(3);
    

}