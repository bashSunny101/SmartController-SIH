// src/components/AnimatedTimeline.jsx

import React, { useState, useEffect } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';

const nodeStyles = {
  border: '1px solid #777',
  padding: '10px',
  borderRadius: '3px',
  background: '#9CA8B3',
  color: '#FFF',
};

const Timeline = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();

        // Format data for React Flow
        const nodes = data.map((item, index) => ({
          id: String(index),
          data: { label: item.title },
          position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
          style: nodeStyles,
        }));

        // Create edges between nodes to form a timeline
        const edges = nodes.map((node, index, arr) => {
          if (index < arr.length - 1) {
            return addEdge({ id: `e${node.id}-${arr[index + 1].id}`, source: node.id, target: arr[index + 1].id }, []);
          }
          return null;
        }).filter(Boolean);

        setElements([...nodes, ...edges]);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow elements={elements}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Timeline;
