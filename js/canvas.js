    function drawRectangles() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (0, 0, 150, 150);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (75, 75, 150, 150);
    
        ctx.fillStyle = "rgba(500, 0, 200, 0.5)";
        ctx.fillRect (150, 150, 150, 150);
      }
    }


