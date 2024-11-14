import React from 'react';
import Node from './Node';

const InputNode = () => (
  <Node type="InputNode" content={<input type="text" placeholder="Enter input" />} handles={[{ position: 'right' }]} />
);

export default InputNode;
