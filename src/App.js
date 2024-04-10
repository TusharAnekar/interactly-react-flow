import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";

import CustomEdge from "./components/CustomEdge";

import "reactflow/dist/style.css";
import "./App.css";
import { useCallback, useRef, useState } from "react";
import { initialEdges, initialNodes } from "./db/interactlyNodesEdges";

const edgeTypes = {
  "custom-edge": CustomEdge,
};

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const yPos = useRef(0);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "custom-edge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const handleAddNode = useCallback(() => {
    yPos.current += 50;
    setNodes((els) => {
      return [
        ...els,
        {
          id: JSON.stringify(Math.random()),
          position: { x: 50, y: 50 },
          data: { label: "New Node" },
          height: 38,
          width: 150,
        },
      ];
    });
  }, []);

  return (
    <div className="App">
      <button onClick={handleAddNode} style={{ cursor: "pointer" }}>
        Add Node
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default App;
