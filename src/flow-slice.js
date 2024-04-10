import { createSlice } from "@reduxjs/toolkit";
import { initialEdges, initialNodes } from "./db/interactlyNodesEdges";

const initialState = {
  nodes: initialNodes,
  edges: initialEdges,
};

export const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    addNode: (state, action) => {
      state.nodes.push({
        id: Math.random(),
        position: { x: 100, y: 100 },
        data: { label: "yo" },
      });
    },
  },
});

export const { addNode, removeTodo } = flowSlice.actions;
export default flowSlice.reducer;
