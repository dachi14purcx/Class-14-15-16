function getPassword(grid, directions) {
  let row, col;
  // Find initial position of 'x'
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "x") {
        row = r;
        col = c;
        break;
      }
    }
    if (row !== undefined && col !== undefined) break;
  }

  let password = "";

  for (const dir of directions) {
    switch (dir) {
      case 'up':
        row -= 1;
        break;
      case 'upT':
        row -= 1;
        password += grid[row][col];
        break;
      case 'down':
        row += 1;
        break;
      case 'downT':
        row += 1;
        password += grid[row][col];
        break;
      case 'left':
        col -= 1;
        break;
      case 'leftT':
        col -= 1;
        password += grid[row][col];
        break;
      case 'right':
        col += 1;
        break;
      case 'rightT':
        col += 1;
        password += grid[row][col];
        break;
    }
  }