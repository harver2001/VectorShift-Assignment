import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';
import nodeFactory from './nodes/nodeFactory';
import { submitPipeline } from './submit';
import './App.css';

const App = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => nds.map((node) => ({ ...node, ...changes.find((change) => change.id === node.id) }))),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => eds.map((edge) => ({ ...edge, ...changes.find((change) => change.id === edge.id) }))),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: nodeFactory(type) },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const handleSubmit = () => {
    submitPipeline(nodes, edges);
  };

  return (
    <div className="app">
      <h1>VectorShift Pipeline Builder</h1>
      <div className="node-buttons">
        <button onClick={() => addNode('text')}>Add Text Node</button>
        <button onClick={() => addNode('input')}>Add Input Node</button>
        <button onClick={() => addNode('output')}>Add Output Node</button>
        <button onClick={() => addNode('llm')}>Add LLM Node</button>
        <button onClick={() => addNode('custom')}>Add Custom Node</button>
      </div>
      <div className="reactflow-wrapper" style={{ height: 600 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <button onClick={handleSubmit}>Submit Pipeline</button>
    </div>
  );
};

export default App;