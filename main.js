const restartBtn = document.getElementById('restart-btn')
const canvas = document.querySelector('#canvas');
const cntxt = canvas.getContext('2d');

let isGamePaused = false;
let isGameOver = false;
let score = 0;

//Number of rows and columns
const blockRowCount = 6;
const blockColumnCount = 9;

//Creating ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2, 
    size: 8, //radius of ball
    speed: 4,
    dx: 4, //how do ball moves along the x axis once it deflects
    dy: -4, //how do ball moves up along the y axis once it deflects
};

//Creating single block property
const blockProp = {
    w: 70,
    h: 24,
    padding: 10,
    offsetX: 45,   //position of brick on x-axis, loop through and change for each brick
    offsetY: 60,
    visible: true //turns to false when ball hits brick
}

//Create the blocks in total
const blocks = [];
for(let i = 0; i < blockColumnCount; i++){
    blocks[i] = [];
    for(let j = 0; j < blockRowCount; j++){
        const x = i * (blockProp.w + blockProp.padding) + blockProp.offsetX;
        const y = j * (blockProp.h + blockProp.padding) + blockProp.offsetY;
        blocks[i][j] = { x, y, ...blockProp };
    }    
}

//Creating paddle properties
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 32,
    w: 80,
    h: 8,
    speed: 8,
    dx: .5,
}

//Draw ball onto canvas
function drawBall(){
    cntxt.beginPath();
    cntxt.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    cntxt.fillStyle = '#d300d3';
    cntxt.fill();
    cntxt.closePath();
}

//Draw paddle on canvas
function drawPaddle(){
    cntxt.beginPath();
    cntxt.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    cntxt.fillStyle = '#d300d3';
    cntxt.fill();
    cntxt.closePath();
}


//Function to draw blocks on the canvas
function drawBlocks(){
    blocks.forEach(column => {
        column.forEach(block => {
            cntxt.beginPath();
            cntxt.rect(block.x, block.y, block.w, block.h);
            cntxt.fillStyle = block.visible ? '#d300d3' : 'transparent';
            cntxt.fill();
            cntxt.closePath();
        })
    });
}

//Drawing score on the canvas
function drawScore(){
    
}

//Function to move paddle on the canvas
function movePaddle(){
    paddle.x += paddle.dx;

    //Surrounding wall detection
    //To the right side
    
    //Surrounding wall detection
    //To the left side
    
}

//Function to move ball on the canvas
function moveBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;

    //Surrounding wall collision detection(x-axis)
    //right and left walls
    if(canvas.width<=ball.x || ball.x<0 ) ball.dx=ball.dx*(-1);

    //Surrounding wall collision detection(y-axis)
    //top and bottom walls
    if(canvas.height<=ball.y || ball.y<0 || (ball.x>=paddle.x-40 && ball.x<=paddle.x+40 && ball.y>=paddle.y-4 && ball.y<=paddle.y+4)) ball.dy=ball.dy*(-1);

    //Paddle collision functionality
    

    //Block collision functionality
    blocks.forEach(column => {
        column.forEach(block => {
            if(block.visible){
                
            }
        });
    });

    //Lose on missing paddle
    if(ball.y + ball.size > canvas.height){
        
    }
}

//Funcion to increase score as block is hit
function increaseScore(){
    
}

//Make all blocks appear
function showAllBlocks(){
    blocks.forEach(column => {
        column.forEach(block => {
            block.visible = true;
        })
    })
}

function showGamePauseText(){
    
}

function showLevelCompleteText(){
    
}

function showGameOverText(){
    
}
// Function called to draw all the canvas elements
function draw(){
    //clear canvas first
    cntxt.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawScore();
    drawPaddle();
    drawBlocks();
}

//Update canvas animation and drawing
function update(){
    movePaddle();
    moveBall();

    //Drawing eveything in the update function
    draw();

    screen = requestAnimationFrame(update);
    if (score == (blockColumnCount*blockRowCount)) {
        
    }else if(isGameOver){
        
    }
}

update();
//restartBtn.style.visibility='hidden';
//Keydown event function
//Targetting the right and left arrow keys
function keyDown(e){
    if(e.key === 'Right' || e.key === 'ArrowRight'){

    } else if(e.key === 'Left' || e.key === 'ArrowLeft'){

    } 
}

//Keyup event function
function keyUp(e){
    // console.log(e.key);
    if(e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'Left' || e.key === 'ArrowLeft'){

    } 
}

//Keyboard event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);




