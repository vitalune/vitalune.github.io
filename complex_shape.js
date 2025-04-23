function drawRect(width, height){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContent("2d");

  ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.rect(20, 20, width, height);
  ctx.stroke();
}

function buildHouse(){
  drawRect(350, 300);
}
