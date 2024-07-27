let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
 const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`; 
    msgcontainer.classList.remove("hide");
}
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
    if(posval1 !=""&& posval2 !=""&& posval3 !=""){
        if(posval1===posval2&& posval2===posval3){
            showWinner(posval1);
            boxes.forEach(box=>box.disabled=true);
            return;
        }
    }
    }
}
resetbtn.addEventListener("click", ()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
    })
    msgcontainer.classList.add('hide');
    turnO=true;
})
newgame.addEventListener("click", ()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
    })
    msgcontainer.classList.add("hide");
    turnO=true;
})