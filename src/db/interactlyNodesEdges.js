const initialNodes = [
  { id: "1", position: { x: 400, y: 100 }, data: { label: "SC1" } },
  { id: "2", position: { x: 100, y: 200 }, data: { label: "Courses Offered" } },
  { id: "3", position: { x: 300, y: 200 }, data: { label: "Courses Details" } },
  { id: "4", position: { x: 500, y: 200 }, data: { label: "About Institue" } },
  { id: "5", position: { x: 700, y: 200 }, data: { label: "About Faculty" } },
  { id: "6", position: { x: 400, y: 300 }, data: { label: "FM1" } },
  { id: "7", position: { x: 400, y: 400 }, data: { label: "SC2" } },
  { id: "8", position: { x: 200, y: 500 }, data: { label: "Student" } },
  { id: "9", position: { x: 400, y: 500 }, data: { label: "Parent" } },
  { id: "10", position: { x: 600, y: 500 }, data: { label: "Others" } },
];

const initialEdges = [
  { id: "e1-2", type: "custom-edge", source: "1", target: "2" },
  { id: "e1-3", type: "custom-edge", source: "1", target: "3" },
  { id: "e1-4", type: "custom-edge", source: "1", target: "4" },
  { id: "e1-5", type: "custom-edge", source: "1", target: "5" },
  { id: "e2-6", type: "custom-edge", source: "2", target: "6" },
  { id: "e3-6", type: "custom-edge", source: "3", target: "6" },
  { id: "e4-6", type: "custom-edge", source: "4", target: "6" },
  { id: "e5-6", type: "custom-edge", source: "5", target: "6" },
  { id: "e6-7", type: "custom-edge", source: "6", target: "7" },
  { id: "e7-8", type: "custom-edge", source: "7", target: "8" },
  { id: "e7-9", type: "custom-edge", source: "7", target: "9" },
  { id: "e7-10", type: "custom-edge", source: "7", target: "10" },
];

export { initialNodes, initialEdges };
