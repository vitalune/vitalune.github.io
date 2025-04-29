const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const colorArray = ['blue', 'red', 'green', 'purple', 'orange', 'brown',
                    'pink', 'yellow'];
let x = 0;
let dx = 2.1;
let y = 0;
let dy = 1.3;
let i = 0;
let color = colorArray[i];
let score = 0;
let gameRunning = true;

const player = {
    x:200,y:200,color:'black',speed:3
}

const keys = {};

function drawPlayer(){
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(
	player.x,player.y,20,0,2*Math.PI
    )
    ctx.fill();
}

//define functions
function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    if(color == colorArray[colorArray.length]){
      i = 0;
      color = colorArray[i];
    }
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function movePlayer(){
    if(keys['ArrowDown'] && player.y < 400){
	player.y += player.speed;
    }
    if(keys['ArrowUp'] && player.y > 0){
        player.y -= player.speed;
    }
    if(keys['ArrowLeft']){
        player.x -= player.speed;
    }
    if(keys['ArrowRight']){
        player.x += player.speed;
    }
    if(player.x > 400){
	player.x = 0;
    }
    if(player.x < 0){
	player.x = 400;
    }
}

function animate() {
    if(gameRunning){
    drawRect(x, y);
    drawPlayer();
    movePlayer();
    score++;
    drawScore();
    if(score > 1000){
	gameRunning = false;
    }
    // TODO: Add some code here 
    //  that will change the rectangle's position
    x = x + dx;
    y = y + dy;

    if(x > 350 || x < 0){
      dx = dx*-1;
      x = x + dx;
      color = colorArray[i++];
      } else if(y > 350 || y < 0){
        dy = dy*-1;
        y = y + dy;
        color = colorArray[i++];
      }
    }
    requestAnimationFrame(animate);
}

function drawScore(){
    ctx.font = "10px Arial";
    ctx.fillText(score, 10, 10);
}

function handleKeyPress(e){
    //console.log(e.key);
    keys[e.key] = true;
}

document.addEventListener('keydown', handleKeyPress);

document.addEventListener('keyup', (e) => {
    //console.log(e.key + " up");
    keys[e.key] = false;
});

//call our function
animate();
