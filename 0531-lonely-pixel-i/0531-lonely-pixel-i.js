
var findLonelyPixel = function(picture) {
  let row = {};
  let col = {};
  let count = 0;
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      if (picture[i][j] === 'B') {
        if (!row[i]) row[i] = 0;
        if (!col[j]) col[j] = 0;
        row[i]++;
        col[j]++;
      }
    }
  }
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      if (picture[i][j] === 'B' && row[i] === 1 && col[j] === 1) count++;
    }
  }
  return count;
};
