import TextNode from '../components/TextNode';
import InputNode from '../components/InputNode';
import OutputNode from '../components/OutputNode';
import LLMNode from '../components/LLMNode';
import CustomNode from '../components/CustomNode';

const nodeFactory = (type) => {
  switch (type) {
    case 'text':
      return <TextNode />;
    case 'input':
      return <InputNode />;
    case 'output':
      return <OutputNode />;
    case 'llm':
      return <LLMNode />;
    case 'custom':
      return <CustomNode />;
    default:
      return null;
  }
};

export default nodeFactory;
