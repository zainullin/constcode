function getGraphFromAM(am) {
  // const graph = {
  //   nodes: [0, 1, 2, 3],
  //   edges: [
  //     [0, 1],
  //     [0, 2],
  //     [0, 3],
  //     [1, 2],
  //   ],
  // };

  // const am = [
  //   [0, 1, 1, 1],
  //   [1, 0, 1, 0],
  //   [1, 1, 0, 0],
  //   [1, 0, 0, 0],
  // ];
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
  const am = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
  ];
const graph = getGraphFromAM(am);

console.log({ graph});

