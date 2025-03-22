import React from "react";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke } from "@/lib/canvas";

interface PathProps {
  points: number[][];
  x: number;
  y: number;
  fill: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  stroke?: string;
}

const Path = ({ points, x, y, fill, onPointerDown, stroke }: PathProps) => {
  return (
    <path
      className="drop-shadow-md"
      onPointerDown={onPointerDown}
      d={getSvgPathFromStroke(
        getStroke(points, {
          size: 16,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        })
      )}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      x={0}
      y={0}
      stroke={stroke}
      fill={fill}
      strokeWidth={1}
    />
  );
};

export default Path;
