// Напишите функцию getGraphFromAm, которая принимает матрицу смежности и возвращает для этой матрицы граф.
// Примечание 1: массив узлов должен быть целыми числами, начиная с 0, и в порядке возрастания.
// Примечание 2: массив ребер должен быть отсортирован по возрастанию кортежей.

function getGraphFromAM(am) {
  // подсчитаем количество узлов
  const nodeNumber = am.length;
  const graph = {
      nodes: [],
      edges: [],
  };
  for (let i = 0; i < nodeNumber; i += 1) {
    graph.nodes.push(i);
  }
  for (let i = 0; i < am.length; i += 1) {
    for (let j = i; j < am.length; j += 1) {
      if (am[i][j] === 1) {
        const tmp = [];
        tmp.push(i);
        tmp.push(j);
        graph.edges.push(tmp);
      }
    }  
  }

  return graph;
}

module.exports = {
  getGraphFromAM,
};
