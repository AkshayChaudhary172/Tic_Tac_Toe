let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let mescon=document.querySelector(".mes-container")
let newbtn=document.querySelector("#new-btn");
let mes=document.querySelector("#mes");



let playerO=true;

let winpatten=[
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

var count=0;
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{

    //    console.log("box was clicked"); 
        if(playerO)
        {
            box.innerText="O";
            playerO=false;
          
        }
        else{
            box.innerText="X";
            playerO=true
        }
        
        box.disabled=true;
        ckeckwinner();
        count++;
        // console.log(count);
        looser(count);
    });
  
});

const looser=(counts)=>{

    if(counts===9)
    {
        mes.innerText=`Both are lose the Game`;
        mescon.classList.remove("hide");
         boxdisabled();
    }
}


const ckeckwinner= ()=>{
  
    for(let patten of winpatten)
    {
        
        // console.log(patten);
        // console.log(patten[0],patten[1],patten[2]);
        // console.log(boxes[patten[0]].innerText,
        //     boxes[patten[1]].innerText,
        //     boxes[patten[2]].innerText);
            let pos1=boxes[patten[0]].innerText;
          
            let pos2=boxes[patten[1]].innerText;

            let pos3= boxes[patten[2]].innerText;

            if(pos1 !="" && pos2 !="" &&pos3 !="")
            {
                if(pos1 === pos2 && pos2===pos3)
                {
                    // console.log("winner",pos1);
                    winnermes(pos1);
                }
               
            }
           
            
    }
   
}

const winnermes=(winner)=>{
    mes.innerText=`Congratulation for win the game ==> ${winner}`;
    mescon.classList.remove("hide");
     boxdisabled();
}
// const losermes=()=>{
//     mes.innerText=`both are loos the game`;
//     mescon.classList.remove("hide");
//      boxdisabled();
// }



const boxdisabled=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
const boxenabled=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}



const resetgame =()=>{
  playerO=true;
boxenabled();
mescon.classList.add("hide");
count=0;

}

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
