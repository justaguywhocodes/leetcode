
var findDuplicate = function(paths) {
  let map = {};
  let result = [];
  for (let i = 0; i < paths.length; i++) {
    let path = paths[i].split(" ");
    let dir = path[0];
    for (let j = 1; j < path.length; j++) {
      let file = path[j].split("(");
      let fileName = file[0];
      let fileContent = file[1].slice(0, -1);
      if (map[fileContent]) {
        map[fileContent].push(dir + "/" + fileName);
      } else {
        map[fileContent] = [dir + "/" + fileName];
      }
    }
  }
  for (let key in map) {
    if (map[key].length > 1) {
      result.push(map[key]);
    }
  }
  return result;
};