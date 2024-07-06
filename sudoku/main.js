let numberSelected = null;
let tileSelected = null;
let diffSelected = null;

let errors = 0;

let board = ["-2---43--",
             "9---2---8",
             "---6-9-5-",
             "--------1",
             "-725-368-",
             "6--------",
             "-8-2-5---",
             "1---9---3",
             "--98---6-"];

let solution = ["827154396",
                "965327148",
                "341689752",
                "593468271",
                "472513689",
                "618972435",
                "786235914",
                "154796823",
                "239841567"];

window.onload = function(){
    startGame();
}
let levels = ["Easy","Medium","Hard","Expert"];
function startGame() {
    for(let i=1; i<=9; i++){
        let number = document.createElement("div");
        number.id = i;
        number.addEventListener("click",numSelected);
        number.innerHTML = i;
        number.classList.add("number");
        document.getElementById("Digits").appendChild(number);
    }

    for(let r=0; r<9; r++){
        for(let c=0; c<9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-"){
                tile.innerHTML = board[r][c];
                tile.classList.add("start");
            }
            if(c == 2 || c == 5){
                tile.classList.add("vertical");
            }
            if(r == 2 || r == 5){
                tile.classList.add("horizontal");
            }
            tile.addEventListener("click",selectedTile);
            tile.classList.add("tile");
            document.getElementById("Board").appendChild(tile);
        }
    }
}

function numSelected(){
    if(numberSelected != null){
        numberSelected.classList.remove("number-selected");
    }
    numberSelected = this;
    numberSelected.classList.add("number-selected");
}
function selectedTile(){
    if(numberSelected){
        if(this.innerHTML != "" && this.innerHTML == numberSelected.innerHTML)return;
        this.innerHTML = numberSelected.id;
        let cords = this.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);
        if(numberSelected.id == solution[r][c]){
            this.innerHTML = numberSelected.id;
            this.style.backgroundColor = `rgb(152, 230, 152)`;
        }
        else{
            this.style.backgroundColor = 'red';
            errors += 1;
            document.getElementById('error').innerHTML = errors;
        }
    }
}