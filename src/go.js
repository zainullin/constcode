function getAdjacencyMatrix(graph) {
  const { nodes, edges } = graph;
  // причешем входные данные
  const map = new Map();
  for (let i = 0; i < nodes.length; i += 1) {
    map.set(nodes[i], i);
  }
  for (let i = 0; i < edges.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      edges[i][j] = map.get(edges[i][j]);
    }
  }

  // узнаем количество узлов
  const nodeNumber = nodes.length;
  // создадим матрицу смежности размером nodeNumber на nodeNumber
  const adjacency_matrix = [];
  for (let i = 0; i < nodeNumber; i += 1) {
    adjacency_matrix[i] = [];
  }

  for (let i = 0; i < nodeNumber; i += 1) {
    for (let j = 0; j < nodeNumber; j += 1) {
      adjacency_matrix[i][j] = 0;
    }
  }
  for (let i = 0; i < edges.length; i += 1) {
    let [ x, y ] =  edges[i];
    adjacency_matrix[x][y] = 1;
    adjacency_matrix[y][x] = 1;
  }
  return adjacency_matrix;
}

const graph = {
  nodes: ["Москва", "Питер", "Омск", "Звенигород"],
  edges: [
    ["Москва", "Питер"],
    ["Москва", "Омск"],
    ["Москва", "Звенигород"],
    ["Питер", "Омск"],
  ],
};

const am = [
  [0, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
  [1, 0, 0, 0],
];

console.log(getAdjacencyMatrix(graph));