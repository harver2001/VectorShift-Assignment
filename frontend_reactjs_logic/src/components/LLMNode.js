import React from 'react';
import Node from './Node';

const LLMNode = () => (
  <Node type="LLMNode" content={<textarea placeholder="LLM processing" />} handles={[{ position: 'left' }, { position: 'right' }]} />
);

export default LLMNode;
