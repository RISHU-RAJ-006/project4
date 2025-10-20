// SIMON J.S
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");

let btns=["red","yellow","green","purple"];
document.addEventListener("keypress",function(){
    if(started==false)
        {
        console.log("GAME IS STARTED");
        started=true; 
        levelup()
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
     },250);

}

function userflash(btn){
btn.classList.add("colorflash")
setTimeout(function()
 {btn.classList.remove("colorflash");

 },250);  
}

function levelup(){
    userSeq=[];
    level++;
h2.innerText=`level ${level}`;
let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
}

function checkAns(idx){
// console.log("curr level  :" ,`${level}`);
if(userSeq[idx]=== gameSeq[idx]){
    console.log("same value");
    if(userSeq.length===gameSeq.length){
        levelup(); 
    }
 }else {
 
h2.innerHTML=`Game over <b>  YOUR SCOR IS  ${level}</b>  press any key to restart the game`;
let body=document.querySelector("body");
body.style.backgroundColor="red";
setTimeout(function(){
    body.style.backgroundColor="white";
},300)
rest()
}
}

function btnPress(){
// console.log(this)  
let btn=this;
userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);  
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
    { btn.addEventListener("click",btnPress)

}; 

let rest=()=>
    { started=false;
     gameSeq=[]; 
     userSeq=[];
     level=0;
    }