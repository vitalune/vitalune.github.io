function drawCircle(width, height)
{
   const canvas = document.getElementById("myCanvas"); 
   const ctx = canvas.getContext("2d"); 

   ctx.fillStyle = "red"; 
   ctx.beginPath(); 
   ctx.arc(width, height, 25, 0, 2*Math.PI); 
   ctx.fill();
}

for (let i = 0, x = 100, y = 100; i < 4; i++, x+= 100, y += 100)
{
   drawCircle(x, y);
}

