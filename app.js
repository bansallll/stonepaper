let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")
const userscorepara=document.querySelector("#user")
const compscorepara=document.querySelector("#computer")


const gencomputer = () => {
    const option = ["rock", "paper", "scissors"]
    const randidx = Math.floor(Math.random() * 3)
    return option[randidx]
}
const drawgame=()=>{
     msg.innerText="Game Draw.Play again"
     msg.style.backgroundColor = "grey";
}

const showwinnner =(usewin)=>{
    if(usewin){
        userscore++;
        userscorepara.innerHTML=userscore
        msg.innerText="You Win!"
        msg.style.backgroundColor = "purple";
    }else{
        compscore++;
        compscorepara.innerHTML=compscore
        console.log("you lose")
         msg.innerText="You Lose"
         msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice=", userchoice)
    const compchoice=gencomputer()
    console.log("comp choice=", compchoice)

  if(userchoice===compchoice){
   drawgame();
  }else {
    let userwin =true
    if(userchoice==="rock"){
       userwin = compchoice==="paper"?false:true
    }else if (userchoice==="paper"){
        userwin= compchoice==="scissors"?false:true
    }else{
        userwin=compchoice==="rock"?false:true
    }
    showwinnner(userwin,compchoice,userchoice)
  }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    })
})