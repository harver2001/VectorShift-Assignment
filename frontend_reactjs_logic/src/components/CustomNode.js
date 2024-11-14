import React from 'react';
import Node from './Node';

const CustomNode = () => (
  <Node type="CustomNode" content={<div>Custom Logic Here</div>} handles={[{ position: 'left' }, { position: 'right' }]} />
);

export default CustomNode;
