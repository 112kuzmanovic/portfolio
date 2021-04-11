function obrazovanje(){
    document.getElementById("obrazovanje").style.display="block";
    document.getElementById("podaci1").style.display="none";
    document.getElementById("jezici").style.display="none";
    document.getElementById("nekiRadovi").style.display="none";
    document.getElementById("prazan").style.display="none";
    
}
function funkcija(){
    document.getElementById("obrazovanje").style.display="none";
    document.getElementById("podaci1").style.display="block";
    document.getElementById("jezici").style.display="none";
    document.getElementById("nekiRadovi").style.display="none";
    document.getElementById("prazan").style.display="none";
}
function jezici(){
    document.getElementById("jezici").style.display="block";
    document.getElementById("obrazovanje").style.display="none";
    document.getElementById("podaci1").style.display="none";
    document.getElementById("nekiRadovi").style.display="none";
    document.getElementById("prazan").style.display="none";
  
    
}function radovi(){
    document.getElementById("nekiRadovi").style.display="block";
    document.getElementById("jezici").style.display="none";
    document.getElementById("obrazovanje").style.display="none";
    document.getElementById("prazan").style.display="none";
    document.getElementById("podaci1").style.display="none";
}

var current=document.getElementById('current');
var slike=document.getElementsByClassName('second');

for(var i=0;i<slike.length;i++){
    slike[i].addEventListener('click',display);
}
function display(){
    var sl=this.getAttribute('src');
    current.setAttribute('src',sl);
}


function vreme(){
    time = new Date()
    cas=time.getHours()
    minuti=time.getMinutes()
    sekunde=time.getSeconds()
    temp = "" + ((cas>12)?cas-12:cas)
    temp += ((minuti<10)?":0":":")+minuti
    temp += ((sekunde<10)?":0":":")+sekunde
    temp += ((cas>=12)?" P.M.":" A.M.")
    document.vremeForma.cifre.value=temp
    setTimeout("vreme()",1000);
}

    var ime=document.getElementById('uvod').innerHTML;
    var ime1=ime.split('');
    var g=document.getElementById('g');
    var q;
    function start(){
        if(ime1.length>0){
            g.innerHTML+=ime1.shift();
            q=setTimeout(start,50);
        }
    }
    
    start();

    var ime3=document.getElementById('uvod2').innerHTML;
    var ime4=ime3.split('');
    var d=document.getElementById('d');
    var w;
    function start1(){
        if(ime4.length>0){
            d.innerHTML+=ime4.shift();
            w=setTimeout(start1,50);
            

        }
    }        setInterval("start1()",4000)


function pocetna(){
   location="index.html"
   }


    