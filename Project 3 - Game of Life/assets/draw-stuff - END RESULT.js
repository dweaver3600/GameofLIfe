// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.

function draw_rect( ctx, stroke, fill ) 
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'white';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;

    ctx.fillStyle = "red";
    ctx.fill();

    ctx.fillStyle = "white";

    var cell_color = []; // an array of all the colors on the grid

    // initial setup
    //      Store the value of every pixel as white
    for (var y = 1; y < 200; y+=10) {
        for (var x = 1; x < 410; x+=10) {
            ctx.rect(x, y, 8, 8);
            cell_color.push("white"); // 820 cell_color elements
        }
    }

    //ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";


    // ==================================================
    // 0th generation
    //      Set the 20th cell to black.
    
    zeroth = 20;
    // fillRect(xcoord, ycoord, xlength, ylength)
    ctx.fillRect(zeroth * 10 + 1, 1, 8, 8); // The 200th cell
    cell_color[zeroth] = ("black");

    //cell_color[0] = ("black");
    //cell_color[40] = ("black");
    //cell_color[41] = ("black");

    /*
    var z = 0;
    for (var y = 1; y < 190; y += 10) {
        for (var x = 1; x < 410; x += 10) {
            if (cell_color[z] == "black") {
                
                ctx.fillStyle = "red";
                ctx.fillRect(x, y, 8, 8);
            }
            z++;
        }
    }
    */

    //      To manipulate this generation, copy the above and set zeroth to the pixel number to be changed
    // ==================================================

    var cell = 0; // the cell_color array iterator
    var ncell;
    var pcell;

    var current_color
    var previous_color
    var next_color

    for (var y = 1; y < 190; y+=10) { // y<399 used because the last row (399) does not need to be evaluated
        //start with the second cell (x = 1 + 10)
        for (var x = 1; x < 410; x+=10) {

            // ================================ Current Grid Size is 400 * 400

            // ================================ Check the array for the colors of the current selection

            current_color = cell_color[cell];

            if (x == 1) { // if cell is first in the row
                previous_color = "white";
            }
            else { previous_color = cell_color[cell - 1]; }

            if (x == 401) { // if cell is  last in the row
                next_color = "white";
            }
            else { next_color = cell_color[cell + 1]; }

            // ================================ end cell selection check



            // ================================ RULES

            // b b b
            //   b

            if (previous_color == "black" &&
                current_color == "black" &&
                next_color == "black") {

                cell_color[cell + 41] = ("black");
                ctx.fillStyle = "black";
            }

            // b b w
            //   w

            else if (previous_color == "black" &&
                current_color == "black" &&
                next_color == "white") {

                cell_color[cell + 41] = ("white");
                ctx.fillStyle = "white";
            }

            // b w b
            //   w

            else if (previous_color == "black" &&
                current_color == "white" &&
                next_color == "black") {

                cell_color[cell + 41] = ("white");
                ctx.fillStyle = "white";
            }

            // b w w
            //   b

            else if (previous_color == "black" &&
                current_color == "white" &&
                next_color == "white") {

                cell_color[cell + 41] = ("black");
                ctx.fillStyle = "black";
            }

            // w b b
            //   b

            else if (previous_color == "white" &&
                current_color == "black" &&
                next_color == "black") {

                cell_color[cell + 41] = ("white");
                ctx.fillStyle = "white";
            }

            // w b w
            //   b

            else if (previous_color == "white" &&
                current_color == "black" &&
                next_color == "white") {

                cell_color[cell + 41] = ("black");
                ctx.fillStyle = "black";
            }

            // w w b
            //   b

            else if (previous_color == "white" &&
                current_color == "white" &&
                next_color == "black") {

                cell_color[cell + 41] = ("black");
                ctx.fillStyle = "black";
            }

            // w w w
            //   w
            else if (previous_color == "white" &&
                current_color == "white" &&
                next_color == "white") {

                cell_color[cell + 41] = ("white");
                ctx.fillStyle = "white";
            }
            // ================================ END RULES

            ctx.fillRect(x, y+10, 8, 8);

            cell++; // increment the cell number to be evaluated
        }
    }

    ctx.restore( );
}

// =====================================================  draw_grid ====
function draw_grid(rctx, rminor, rmajor, rstroke, rfill) {
    rctx.save();
    rctx.strokeStyle = "yellow";
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;

    for (var ix = 0; ix < width; ix += rminor) {
        rctx.beginPath();
        rctx.moveTo(ix, 0);
        rctx.lineTo(ix, height);
        rctx.lineWidth = (ix % rmajor == 0) ? 0.5 : 0.25;
        rctx.stroke();
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); } // The numbers of the x axis
    }
    for (var iy = 0; iy < height; iy += rminor) {
        rctx.beginPath();
        rctx.moveTo(0, iy);
        rctx.lineTo(width, iy);
        rctx.lineWidth = (iy % rmajor == 0) ? 0.5 : 0.25;
        rctx.stroke();
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );} // The Numbers of the y axis
    }
    rctx.restore();
}
