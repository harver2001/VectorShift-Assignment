import React from 'react';
import Node from './Node';

const OutputNode = () => (
  <Node type="OutputNode" content={<div>Output Display</div>} handles={[{ position: 'left' }]} />
);

export default OutputNode;
