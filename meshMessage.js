var network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Adam']
};

const findAnyPath = (network, from, to, path = [], visited = {}) => {
  if (visited[from] || !network[from]) return null;
  
  visited[from] = true;
  path = path.concat(from);
  if (from === to) return path;
  
  for (let i = 0; i < network[from].length; i++) {
    const friend = network[from][i];
    const recurse = findAnyPath(network, friend, to, path, visited);

    if (recurse) return recurse;
  }

  return null;
};

console.log(findAnyPath(network, 'Jayden', 'Adam'));

const findAllPaths = (network, from, to, path = [from], visited = {}) => {
  if (visited[from] || !network[from]) return null;
  if (from === to) return [ path ];

  let paths = [];
  
  for (let i = 0; i < network[from].length; i++) {
    const friend = network[from][i];
    
    visited[from] = true;
    
    const recurse = findAllPaths(network, friend, to, path.concat(friend), visited);
    
    visited[from] = false;
    
    if (recurse) paths = paths.concat(recurse);
  }

  return paths;
};

console.log(findAllPaths(network, 'Jayden', 'Adam'));

const findShortestPath = (network, from, to, path = [from], visited = {}) => {
  if (visited[from] || !network[from]) return null;
  if (from === to) return path;

  let shortestPath = null;
  
  for (let i = 0; i < network[from].length; i++) {
    const friend = network[from][i];
    
    visited[from] = true;
    
    const recurse = findShortestPath(network, friend, to, path.concat(friend), visited);
    
    visited[from] = false;
    
    if (recurse && (!shortestPath || recurse.length < shortestPath.length)) {
      shortestPath = recurse;
    }
  }

  return shortestPath;
};

console.log(findShortestPath(network, 'Jayden', 'Adam'));
