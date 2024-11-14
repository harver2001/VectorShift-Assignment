import React, { useState, useEffect, useRef } from 'react';
import Node from './Node';

const TextNode = () => {
  const [text, setText] = useState('');
  const [handles, setHandles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 100, height: 50 });
  const textAreaRef = useRef(null);

  useEffect(() => {
    const matches = text.match(/\{\{(.*?)\}\}/g);
    if (matches) {
      const newHandles = matches.map((match) => ({
        position: 'left',
        label: match.replace(/\{\{|\}\}/g, '').trim(),
      }));
      setHandles(newHandles);
    } else {
      setHandles([]);
    }

    const lines = text.split('\n');
    const newWidth = Math.max(100, ...lines.map(line => line.length * 8));
    const newHeight = Math.max(50, textAreaRef.current.scrollHeight);
    setDimensions({ width: newWidth, height: newHeight });
  }, [text]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <Node
      type="TextNode"
      content={
        <div style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px`, overflow: 'hidden' }}>
          <textarea
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: 'none', 
              width: '100%', 
              height: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '14px',
              fontFamily: 'Arial, sans-serif',
              boxSizing: 'border-box',
              overflow: 'hidden',
              whiteSpace: 'pre-wrap', 
              wordWrap: 'break-word' 
            }}
          />
        </div>
      }
      handles={handles}
    />
  );
};

export default TextNode;