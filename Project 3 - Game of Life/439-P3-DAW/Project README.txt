Readme File
You should provide a README.txt text file. Be clear in your instruction on how to build and use the project
by providing instructions a novice programmer would understand. If there are any external dependencies for
building, the README must also list them and how to find and incorporate them. Usage should include an
example invocation. A README would cover the following:


• Class number
	CPSC 439 - 01


• Project number and name
	Project 3 - Game of Life


• Team name and members
	TEAM DAW - Dominick Weaver


• Intro (including the algorithm used)

	The algorithm used is as follows in pseudocode

	for each cell {
		evaluate the current cell's 8 neighboring cells
		
		if the current cell's "neighbors alive" count is less than 2 (underpopulation) or more than 3 (overpopulation)
			color the current cell white (kill the cell)

		else if the current cell's "neighbors alive" count is 2 or 3 and the cell is black
			do nothing (keep alive)

		else if the current cell's "neighbors alive" count is 3 and the cell is white
			color the cell black (birth a cell)

		move to the next cell
	}



• Contents: Files in the .zip submission
	In the .zip file, there is one extra folder not included in the original .zip file which includes js-1.html so that the project will run properly and one report .pdf file.


• External Requirements (None?)
	There are no external requirements for this project to run.


• Setup and Installation (if any)
	There is no set up process involved to run this project.


• Sample invocation
	To invoke the project, run the js-1.html file found in the folder named "js-folder". Use the given buttons to produce results
		END RESULT will show what the end result of rule 150 is.
		Strep Through will walk through the pattern one cell at a time for every click.


• Features (both included and missing)
	This project runs Cella rule 150 given a grid of 410 by 200 pixels with a 0th generation of only the 20th pixel turned black. All other pixels in the 0th generation are white.
	The algorithm used will evaluate every group of three pixels to determine the color the algorithm should write below the evaluated pixels. Pixels on the leftmost and rightmost sides
		of the grid will be given a white neighbor pixel for its "out of bound neigbor".
	
• Bugs (if any)
	The Step Through button will attempt to continue out of bounds of the given grid.