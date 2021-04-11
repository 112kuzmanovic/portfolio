alert("KLIKNI NA BROJ I SAZNAJ KOLIKO JE PUTA BIO IZVUCEN OD 30.KOLA PA DO ZADNJEG");

var a=[2,4,10,11,13,19,35,5,9,10,22,23,27,35,1,3,9,24,27,31,33,1,13,14,20,21,27,
    36,9,11,18,23,24,31,32,4,14,22,33,36,37,38,6,13,20,21,22,27,36,4,9,13,14,22,26
    ,37,14,15,16,20,22,25,36,9,11,12,16,17,35,37,2,11,16,21,28,33,37,4,5,11,17,28,
    30,34,4,6,9,13,20,34,37,1,6,11,23,34,35,39,10,16,22,29,35,37,38,1,3,4,
16,27,28,34,4,10,21,25,27,30,39,13,14,17,19,25,30,32,3,4,5,24,25,29,38,
2,5,19,22,23,34,37,11,15,19,22,26,32,38,1,3,5,11,14,31,33,7,17,18,24,
26,35,38,1,2,6,11,14,31,39,2,17,28,34,35,36,37,1,8,16,22,30,32,34,12,
25,26,32,33,35,38,1,2,15,21,22,23,27,3,5,9,18,21,31,38,6,7,23,25,29,30,35,
7,17,18,21,26,31,39,15,27,32,34,35,36,39,1,4,9,22,30,33,35,16,19,22,25,29,34,35,
3,19,24,28,34,36,39,1,2,6,12,21,31,32,9,11,16,21,29,31,38,4,15,16,22,
24,28,31,5,10,11,19,22,32,35,3,4,12,7,15,30,36,4,7,12,19,21,23,37,
5,8,11,16,25,26,33,4,9,17,18,19,36,39,2,12,13,14,17,23,31,
11,17,27,28,33,34,37];


function jedan(){
    
    let b=1;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
if(brojac==1){
    document.calc.res.value="broj 1 je izvucen jednom";
    
}
    if(brojac<1){
        document.calc.res.value="broj 1 nije izvucen";
        
    }
if(brojac>1){
    document.calc.res.value="broj 1 je izvucen:"+brojac+" "+"puta";
    
    
}document.calc1.polje1.value="1="+brojac;
}

function dva(){
    
    let b=2;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
    if(brojac==1){
        document.calc.res.value="broj 2 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 2 nije izvucen";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 2 je izvucen:"+brojac+" "+"puta";
    }document.calc1.polje2.value="2="+brojac;
}
function tri(){
    
    let b=3;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 3 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 3 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 3 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje3.value="3="+brojac;
}

function cetiri(){
    
    let b=4;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 4 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 4 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 4 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje4.value="4="+brojac;
}

function pet(){
    
    let b=5;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 5 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 5 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 5 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje5.value="5="+brojac;
}

function sest(){
    
    let b=6;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 6 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 6 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 6 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje6.value="6="+brojac;
}
function sedam(){
    
    let b=7;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 7 je izvucen jednom";
        
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 7 nije izvucen ";
            ;
        }
    if(brojac>1){
    
    
        document.calc.res.value="broj 7 je izvucen:"+brojac+" "+"puta";
        
}document.calc1.polje7.value="7="+brojac;
}
function osam(){
    
    let b=8;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 8 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 8 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 8 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje8.value="8="+brojac;
}
function devet(){
    
    let b=9;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 9 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 9 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 9 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje9.value="9="+brojac;
}
function deset(){
    
    let b=10;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 10 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 10 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 10 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje10.value="10="+brojac;
}
function jedanaest(){
    
    let b=11;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 11 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 11 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 11 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje11.value="11="+brojac;
}
function dvanaest(){
    
    let b=12;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 12 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 12 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 12 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje12.value="12="+brojac;
}
function trinaest(){
    
    let b=13;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 13 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 13 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 13 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje13.value="13="+brojac;
}
function cetrnaest(){
    
    let b=14;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 14 je izvucen jednom";
    }
    
    
        if(brojac<1){
            document.calc.res.value="broj 14 nije izvucen ";
        }
    if(brojac>1){
    
    
    
    
    
        document.calc.res.value="broj 14 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje14.value="14="+brojac;
}
function petnaest(){
    
    let b=15;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 15 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 15 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 15 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje15.value="15="+brojac;
}
function sesnaest(){
    
    let b=16;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 16 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 16 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 16 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje16.value="16="+brojac;
}
function sedamnaest(){
    
    let b=17;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 17 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 17 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 17 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje17.value="17="+brojac;
}
function osamnaest(){
    
    let b=18;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 18 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 18 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 18 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje18.value="18="+brojac;
}
function devetnaest(){
    
    let b=19;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 19 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 19 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 19 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje19.value="19="+brojac;
}
function dvadeset(){
    
    let b=20;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 20 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 20 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 20 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje20.value="20="+brojac;
}
function dvadesetjedan(){
    
    let b=21;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 21 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 21 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 21 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje21.value="21="+brojac;
}
function dvadesetdva(){
    
    let b=22;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 22 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 22 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 22 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje22.value="22="+brojac;
}
function dvadesettri(){
    
    let b=23;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 23 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 23 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 23 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje23.value="23="+brojac;
}
function dvadesetcetiri(){
    
    let b=24;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 24 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 24 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 24 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje24.value="24="+brojac;
}
function dvadesetpet(){
    
    let b=25;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 25 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 25 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 25 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje25.value="25="+brojac;
}
function dvadesetsest(){
    
    let b=26;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 26 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 26 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 26 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje26.value="26="+brojac;
}
function dvadesetsedam(){
    
    let b=27;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 27 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 27 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 27 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje27.value="27="+brojac;
}
function dvadesetosam(){
    
    let b=28;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 28 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 28 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 28 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje28.value="28="+brojac;
}
function dvadesetdevet(){
    
    let b=29;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 29 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 29 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 29 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje29.value="29="+brojac;
}
function trideset(){
    
    let b=30;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 30 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 30 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 30 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje30.value="30="+brojac;
}
function tridesetjedan(){
    
    let b=31;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 31 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 31 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 31 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje31.value="31="+brojac;
}
function tridesetdva(){
    
    let b=32;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 32 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 32 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 32 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje32.value="32="+brojac;
}
function tridesettri(){
    
    let b=33;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 33 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 33 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 33 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje33.value="33="+brojac;
}
function tridesetcetiri(){
    
    let b=34;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 34 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 34 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 34 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje34.value="34="+brojac;
}
function tridesetpet(){
    
    let b=35;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 35 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 35 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 35 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje35.value="35="+brojac;
}
function tridesetsest(){
    
    let b=36;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 36 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 36 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 36 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje36.value="36="+brojac;
}
function tridesetsedam(){
    
    let b=37;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 37 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 37 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 37 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje37.value="37="+brojac;
}
function tridesetosam(){
    
    let b=38;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 38 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 38 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 38 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje38.value="38="+brojac;
}
function tridesetdevet(){
    
    let b=39;
    let brojac=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            brojac++;
        }
    }
  
    if(brojac==1){
        document.calc.res.value="broj 39 je izvucen jednom";
    }
        if(brojac<1){
            document.calc.res.value="broj 39 nije izvucen ";
        }
    if(brojac>1){
        document.calc.res.value="broj 39 je izvucen:"+brojac+" "+"puta";
}document.calc1.polje39.value="39="+brojac;
}
function brisanje(){
    document.calc1.polje39.value="";
    document.calc1.polje38.value="";
    document.calc1.polje37.value="";
    document.calc1.polje36.value="";
    document.calc1.polje35.value="";
    document.calc1.polje34.value="";
    document.calc1.polje33.value="";
    document.calc1.polje32.value="";
    document.calc1.polje31.value="";
    document.calc1.polje30.value="";
    document.calc1.polje29.value="";
    document.calc1.polje28.value="";
    document.calc1.polje27.value="";
    document.calc1.polje26.value="";
    document.calc1.polje25.value="";
    document.calc1.polje24.value="";
    document.calc1.polje23.value="";
    document.calc1.polje22.value="";
    document.calc1.polje21.value="";
    document.calc1.polje20.value="";
    document.calc1.polje19.value="";
    document.calc1.polje18.value="";
    document.calc1.polje17.value="";
    document.calc1.polje16.value="";
    document.calc1.polje15.value="";
    document.calc1.polje14.value="";
    document.calc1.polje13.value="";
    document.calc1.polje12.value="";
    document.calc1.polje11.value="";
    document.calc1.polje10.value="";
    document.calc1.polje9.value="";
    document.calc1.polje8.value="";
    document.calc1.polje7.value="";
    document.calc1.polje6.value="";
    document.calc1.polje5.value="";
    document.calc1.polje4.value="";
    document.calc1.polje3.value="";
    document.calc1.polje2.value="";
    document.calc1.polje1.value="";
    document.calc.res.value="";

}
