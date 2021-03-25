let grid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81];
var random = [];
let clickedbox=[];
let game = true;
let score = 0;
function fillRandom(){
    let i=0;
    while(i<10){
        let x = Math.floor((Math.random() * 81) + 1);
        if(!(random.includes(x))){
            random[i++]=Number(x);
        }
    }
}
fillRandom();
function restart(){
    game=true;
    score=0;
    document.getElementById('gameScore').innerText=score;
    document.getElementById('grid').innerHTML='';
    document.getElementById('resultDisplay').innerText="";
    clickedbox=[];
    random=[];
    fillRandom();
    createGrid();
    starts();
}

function createGrid(){
    let create = document.getElementById('grid');
    let row = 9,col=9,c=0;
    for(let i=0;i<row;i++){
        let rowbox = document.createElement("div");
        for(let j=0;j<col;j++){
            let box = document.createElement("div");
            //box.innerText=grid[c];
            box.setAttribute('class','boxele');
            box.setAttribute('id','cell_'+grid[c++]);
            rowbox.appendChild(box);
        }
        create.appendChild(rowbox);
    }

}
createGrid();
function starts(){
    document.querySelectorAll(".boxele").forEach(ele => 
        ele.addEventListener('click',function()
            {
                if(game){
                    handleClick(ele);
                }
            }
            )
    );
}
starts();



function handleClick(ele){
    if(!clickedbox.includes(ele)){
        clickedbox.push(ele);
        ele.setAttribute('class','clicked');
        var flag = false;
        for(let i =0;i<random.length;i++){
            if(("cell_"+random[i])==ele.id){
                gameOver();
                return;
            }
        }
        score++;
        document.getElementById('gameScore').innerText=score;
        if(score==71){
            winGame();
        }
    }
}

function gameOver(){
    
    for(let i=0;i<10;i++){
        let getId="cell_"+random[i];
        let temp=document.getElementById(getId);
        temp.setAttribute('class','bombcell');
    }
    game = false;
    document.getElementById('resultDisplay').innerText="game over";
}

function winGame(){
    document.getElementById('resultDisplay').innerText="win";
    game=false;
}