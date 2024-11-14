export const submitPipeline = async (nodes, edges) => {
  const response = await fetch('http://localhost:8000/pipelines/parse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nodes, edges }),
  });

  const data = await response.json();
  alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
};