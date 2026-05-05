import { useState } from "react";
import "./App.css";

import Header from "./components/header.jsx";
import ColorBoard from "./components/colorBoard.jsx";
import ColorPanel from "./components/colorPanel.jsx";

const GRID_SIZE = 16;
const DEFAULT_COLOR = "#ffffff";
const PRESETS = [
  '#000000', '#ffffff', '#e63946', '#f1a208', '#ffd166',
  '#06d6a0', '#118ab2', '#7209b7', '#f72585', '#ff8500',
]

function makeEmptyGrid() {
  return Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(DEFAULT_COLOR),
  );
}

function App() {
  const [grid, setGrid] = useState(makeEmptyGrid);

  const [currentColor, setCurrentColor] = useState("#1a1a1a");

  const clearGrid = () => {
    setGrid(makeEmptyGrid())
  }


  const paint = (row, col) => {
    const next = grid.map((r) => r.slice());
    next[row][col] = currentColor;
    setGrid(next);
  };

  return (
    <>
      <h1>Pixel Art Editor</h1>
      <div className="pixel-art">
        <label className="pixel-tools">
          Color
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
          />
        </label>
        <div className="pixel-presets">
          {PRESETS.map(c => (
            <button
              key={c}
              className={'preset' + (c === currentColor ? ' selected' : '')}
              style={{background: c}}
              onClick={() => setCurrentColor(c)}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>
        <button className="clear-btn" onClick={clearGrid}>Clear</button>

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
                onMouseDown={() => paint(r, c)}
                onMouseEnter={(e) => {
                  if (e.buttons === 1) {
                    paint(r, c)
                  }
                }}
                aria-label={`Pixel ${r}, ${c}`}
              />
            )),
          )}
        </div>
      </div>
    </>
  );
}

export default App;
