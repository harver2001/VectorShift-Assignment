import React from 'react';
import './Node.css';

const Node = ({ type, content, handles }) => {
  return (
    <div className={`node ${type}`}>
      {content}
      {handles.map((handle, index) => (
        <div key={index} className="node-handle" title={handle.label} style={{ top: `${index * 20}px` }}></div>
      ))}
    </div>
  );
};

export default Node;