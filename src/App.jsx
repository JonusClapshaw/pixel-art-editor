import { useState } from "react";
import "./App.css";

import Header from "./components/header.jsx";
import ColorBoard from "./components/colorBoard.jsx";
import ColorPanel from "./components/colorPanel.jsx";

const GRID_SIZE = 16;
const DEFAULT_COLOR = "#ffffff";

function makeEmptyGrid() {
  return Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(DEFAULT_COLOR),
  );
}

function App() {
  const [grid, setGrid] = useState(makeEmptyGrid);

  const [currentColor, setCurrentColor] = useState("#1a1a1a");

  const paint = (row, col) => {
    const next = grid.map((r) => r.slice());
    next[row][col] = currentColor;
    setGrid(next);
  };

  return (
    <div className="pixel-art">
      <label className="pixel-tools">
        Color
        <input
          type="color"
          // Value comes from state, not from the input's own internal storage
          value={currentColor}
          // On every change, push the new hex color back into state
          onChange={(e) => setCurrentColor(e.target.value)}
        />
      </label>

      <h1>Pixel Art Editor</h1>

      <div
        className="pixel-grid"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {grid.map((row, r) =>
          row.map((color, c) => (
            <button
              key={`${r}-${c}`}
              className="pixel"
              style={{ background: color }}
              onClick={() => paint(r, c)}
              aria-label={`Pixel ${r}, ${c}`}
            />
          )),
        )}
      </div>
    </div>
  );
}

export default App;
