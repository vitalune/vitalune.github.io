    function drawRect(ctx, x, y, width, height, fillColor, strokeColor) {
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.fill();
      ctx.stroke();
    }

    function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, fillColor, strokeColor) {
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    function drawCircle(ctx, cx, cy, radius, fillColor, strokeColor) {
      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    function drawHouse(ctx, x, y) {
      const wallWidth  = 100;
      const wallHeight =  80;
      const roofHeight =  50;
      
      drawRect(ctx,
        x, y,
        wallWidth, wallHeight,
        "#faf0e6",
        "#555"
      );
      
      drawTriangle(ctx,
        x - 10,           y,              
        x + wallWidth/2,  y - roofHeight,  
        x + wallWidth+10, y,               
        "#b22222", 
        "#555"
      );
      
      drawRect(ctx,
        x + wallWidth/2 - 10, y + wallHeight - 30,
        20, 30,
        "#8b4513", 
        "#333"
      );

      const winRadius = 12;
      drawCircle(ctx,
        x +  twenty, y + forty, winRadius,
        "#87ceeb", "#555"
      );
      drawCircle(ctx,
        x + wallWidth - twenty, y + forty, winRadius,
        "#87ceeb", "#555"
      );
    }

    function drawScene() {
      const canvas = document.getElementById("myCanvas");
      const ctx    = canvas.getContext("2d");

      drawRect(ctx, 0, 0, canvas.width, canvas.height * 0.6, "#87ceeb", "#87ceeb");
      
      drawRect(ctx, 0, canvas.height * 0.6, canvas.width, canvas.height * 0.4, "#228b22", "#228b22");

      drawHouse(ctx,  50, 300);
      drawHouse(ctx, 250, 320);
      drawHouse(ctx, 450, 290);
      drawHouse(ctx, 650, 310);
    }

    window.onload = drawScene;
