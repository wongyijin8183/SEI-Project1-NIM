console.log("Start!");

var stepCount = 0;

var tree = [ ];

//input of player names
var inputHappened = function(currentInput){
    return currentInput;
};

var inputHappened2 = function(currentInput2){
    return currentInput2;
};

//assigning inputs to respective displays
      document.querySelector('#input').addEventListener('change', function(event){
        currentInput = event.target.value;
        var result = inputHappened(currentInput);
        display( result );
      });
      var display = function( data ){
        var output = document.querySelector('#output');
        output.innerText = data;
      }

      document.querySelector('#input2').addEventListener('change', function(event2){
        var currentInput2 = event2.target.value;
        var result2 = inputHappened2(currentInput2);
        display2( result2 );
      });
      var display2 = function( data2 ){
        var output2 = document.querySelector('#output2');
        output2.innerText = data2;
      }


var activateRow1 = function(){
    var row1Sticks = document.querySelectorAll(".row1stick");
    for (var i = 0; i < row1Sticks.length; i++) {
        var firstRow = row1Sticks[i];
        firstRow.addEventListener("click" , changeColor);
    }
}

var activateRow2 = function(){
    var row2Sticks = document.querySelectorAll(".row2stick");
    for (var i = 0; i < row2Sticks.length; i++) {
        var secondRow = row2Sticks[i];
        secondRow.addEventListener("click" , changeColor);
    }
}

var activateRow3 = function(){
    var row3Sticks = document.querySelectorAll(".row3stick");
    for (var i = 0; i < row3Sticks.length; i++) {
        var thirdRow = row3Sticks[i];
        thirdRow.addEventListener("click" , changeColor);
    }
}
var activateRow4 = function(){
    var row4Sticks = document.querySelectorAll(".row4stick");
    for (var i = 0; i < row4Sticks.length; i++) {
        var fourthRow = row4Sticks[i];
        fourthRow.addEventListener("click" , changeColor);
    }
}

//after "start" button is clicked
var clickStart = function(){

    stepCount = 1;

    //making name input bars disappear after game starts
    var playerOneInput = document.querySelector("#input")
    playerOneInput.classList.remove('displayinput');
    playerOneInput.classList.add('hideinput');

    var playerTwoInput = document.querySelector("#input2")
    playerTwoInput.classList.remove('displayinput');
    playerTwoInput.classList.add('hideinput');

    //remove "start" button after game starts
    var startRemove = document.querySelector("#startbutt");
    startRemove.classList.add('hideinput');

    //create "next" button after game starts
    var nextTurn = document.createElement("button");
    var middleCol = document.querySelector(".space")
    nextTurn.classList.add("nextbutt");
    nextTurn.innerText="Next";
    middleCol.appendChild(nextTurn);
    nextTurn.addEventListener ("click" , changeTurn);

    //the board itself
    var board = document.createElement("div");
    document.body.appendChild(board);

    var row1 = document.createElement("div");
    row1.classList.add("boardrow");
    board.appendChild(row1);

    var rowOneSelector = document.createElement("button");
    rowOneSelector.classList.add("row1butt");
    row1.appendChild(rowOneSelector);
    rowOneSelector.addEventListener ("click" , activateRow1);

    var button11 = document.createElement("button");
    button11.classList.add("stick");
    button11.classList.add("row1stick");
    button11.classList.add("round2");
    button11.setAttribute("id" , "stick11");
    button11.innerText="|";
    row1.appendChild(button11);

    var row2 = document.createElement("div");
    row2.classList.add("boardrow");
    board.appendChild(row2);

    var rowTwoSelector = document.createElement("button");
    rowTwoSelector.classList.add("row2butt");
    row2.appendChild(rowTwoSelector);
    rowTwoSelector.addEventListener ("click" , activateRow2);

    var button21 = document.createElement("button");
    button21.classList.add("stick");
    button21.classList.add("row2stick");
    button21.classList.add("round2");
    button21.setAttribute("id" , "stick21");
    button21.innerText="|";
    row2.appendChild(button21);

    var button22 = document.createElement("button");
    button22.classList.add("stick");
    button22.classList.add("row2stick");
    button22.classList.add("round2");
    button22.setAttribute("id" , "stick22");
    button22.innerText="|";
    row2.appendChild(button22);

    var row3 = document.createElement("div");
    row3.classList.add("boardrow");
    board.appendChild(row3);

    var rowThreeSelector = document.createElement("button");
    rowThreeSelector.classList.add("row3butt");
    row3.appendChild(rowThreeSelector);
    rowThreeSelector.addEventListener ("click" , activateRow3);

    var button31 = document.createElement("button");
    button31.classList.add("stick");
    button31.classList.add("row3stick");
    button31.classList.add("round2");
    button31.setAttribute("id" , "stick31");
    button31.innerText="|";
    row3.appendChild(button31);

    var button32 = document.createElement("button");
    button32.classList.add("stick");
    button32.classList.add("row3stick");
    button32.classList.add("round2");
    button32.setAttribute("id" , "stick32");
    button32.innerText="|";
    row3.appendChild(button32);

    var button33 = document.createElement("button");
    button33.classList.add("stick");
    button33.classList.add("row3stick");
    button33.classList.add("round2");
    button33.setAttribute("id" , "stick33");
    button33.innerText="|";
    row3.appendChild(button33);

    var row4 = document.createElement("div");
    row4.classList.add("boardrow");
    board.appendChild(row4);

    var rowFourSelector = document.createElement("button");
    rowFourSelector.classList.add("row4butt");
    row4.appendChild(rowFourSelector);
    rowFourSelector.addEventListener ("click" , activateRow4);

    var button41 = document.createElement("button");
    button41.classList.add("stick");
    button41.classList.add("row4stick");
    button41.classList.add("round2");
    button41.setAttribute("id" , "stick41");
    button41.innerText="|";
    row4.appendChild(button41);

    var button42 = document.createElement("button");
    button42.classList.add("stick");
    button42.classList.add("row4stick");
    button42.classList.add("round2");
    button42.setAttribute("id" , "stick42");
    button42.innerText="|";
    row4.appendChild(button42);

    var button43 = document.createElement("button");
    button43.classList.add("stick");
    button43.classList.add("row4stick");
    button43.classList.add("round2");
    button43.setAttribute("id" , "stick43");
    button43.innerText="|";
    row4.appendChild(button43);

    var button44 = document.createElement("button");
    button44.classList.add("stick");
    button44.classList.add("row4stick");
    button44.classList.add("round2");
    button44.setAttribute("id" , "stick44");
    button44.innerText="|";
    row4.appendChild(button44);

    console.log("rows done!");

changeTurn();
};


//turn display
var P1 = document.querySelector('#output')
var P2 = document.querySelector('#output2')
var P1Score = document.querySelector(".playerone-score")
var P2Score = document.querySelector(".playertwo-score")
var changeTurn = function(event){
    stepCount++;
    if (stepCount%2 != 0){
        P2.style.color="blue";
        P2.style.fontWeight="bold";
        P2Score.style.color="blue";
        P2Score.style.fontWeight="bold";
        P1.style.color="black";
        P1.style.fontWeight="normal";
        P1Score.style.color="black";
        P1Score.style.fontWeight="normal";
    } else if (stepCount%2 === 0){
        P1.style.color="red";
        P1.style.fontWeight="bold";
        P1Score.style.color="red";
        P1Score.style.fontWeight="bold";
        P2.style.color="black"
        P2.style.fontWeight="normal";
        P2Score.style.color="black";
        P2Score.style.fontWeight="normal";

    }
};


var changeColor = function(event){
        if (event.target.classList.contains("stick")) {
            if (stepCount%2 === 0){
                event.target.classList.remove("stick");
                event.target.classList.add("player1");
                var p1 = "0";
                tree.push(p1);
                EndGame();
            } else if (stepCount%2 != 0) {
                event.target.classList.remove("stick");
                event.target.classList.add("player2");
                var p1 = "0";
                tree.push(p1);
                EndGame();
            }
        }
    }


//reset function
    var resetGame = function(){
        var roundTwo = document.querySelectorAll(".round2");
        console.log(roundTwo)
        for (var i = 0; i < roundTwo.length; i++) {
            var r2 = roundTwo[i];
            if (roundTwo[i].classList.contains("player1")){
                roundTwo[i].classList.remove("player1");
                roundTwo[i].classList.add("stick");
            } else if (roundTwo[i].classList.contains("player2")){
                roundTwo[i].classList.remove("player2");
                roundTwo[i].classList.add("stick");
            }
        }
    }

var allButtons = document.querySelectorAll("button");

var scoreOne = 0;

var scoreHolderOne = document.querySelector(".starter3");
scoreHolderOne.innerText = scoreOne;

var scoreTwo = 0;
var scoreHolderTwo = document.querySelector(".starter4");
scoreHolderTwo.innerText = scoreTwo;

//win state
function EndGame(){
    if (tree.length ===10){
    console.log("game ended!");
        if (stepCount%2 != 0){
        scoreOne++;
        scoreHolderOne.innerText = scoreOne;;
        console.log("player1 win");
        resetGame();

        }
        else if (stepCount%2 === 0){
        scoreTwo++;
        scoreHolderTwo.innerText = scoreTwo;
        console.log("player2 win");
        resetGame();

        }
    }
}