const playbtn = document.getElementById("playbtn")
const container = document.querySelector(".container")
const difficultyElem = document.getElementById("difficulty")
const message = document.getElementById("message")
let bombs = [];
let notbombs = [];

playbtn.addEventListener("click", function(event) {
    event.preventDefault()
    container.innerHTML = ""
    container.classList.remove("hidden")
    const difficulty = difficultyElem.value
    console.log(difficulty);

    bombs = [];
    console.log(bombs);
    switch (difficulty) {
        case "hard":  playGame(49); break;
        case "medium": playGame(81); break;
        default: playGame(100);
    }
})


function playGame(num) {

    for (let i = 1; i <= num; i++) {
        generateBombs(num)
        const winNumber = num - bombs.length;
        console.log(winNumber);
        switch (difficultyElem.value) {
            case "hard": cellClass = "boxhard"; break;
            case "medium": cellClass = "boxmed"; break;
            default: cellClass = "box";
        }
        const cell = generateCell(i, `${cellClass}`)
        cell.addEventListener("click", function() {
            const cellnumber = parseInt(this.textContent);
            if (bombs.includes(cellnumber)) {
                this.classList.add("bomb")
                message.innerHTML = (`HAI PERSO HAI TROVATO ${notbombs.length} CASELLE SENZA BOMBA`);
                console.log(notbombs.length);
            } else {
                this.classList.add("click")
        
                if (!notbombs.includes(cellnumber)) {
                    notbombs.push(cellnumber)
                }

                if (notbombs.length === winNumber) {
                    message.innerHTML = (`HAI VINTO HAI TROVATO TUTTE LE ${notbombs.length} CASELLE SENZA BOMBA`);
                }
            }
        })
        container.append(cell)  
    } 
}

// Functions
/**
 * Funzione che genera una cella con un numero all' interno ed una classe
 * @param {number} number
 * @param {string} class
 * @returns {any}
 */
function generateCell(number, string) {
    const cell = document.createElement("div")
    cell.classList.add(`${string}`)
    cell.innerHTML = number
    return cell
}

/**
 * Funzione che genera 16 numeri casuali diversi in un array 
 * @param {number} cellmaxnumber
 * @returns {array}
 */
function generateBombs(cellmaxnumber) {
    while (bombs.length < 16) {
        const rndNumber = Math.floor(Math.random() * (cellmaxnumber - 1) ) + 1;
        if (!bombs.includes(rndNumber)) {
            bombs.push(rndNumber)            
        }
    }
}

