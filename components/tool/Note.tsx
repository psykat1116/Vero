import { useMutation } from "@liveblocks/react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { NoteLayer } from "@/types/canvas";
import { getContrastColor, RGBToHex } from "@/lib/color";

interface NoteProps {
  id: string;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
  layer: NoteLayer;
}

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.15;
  const fontSizeBasedOnWidth = width * scaleFactor;
  const fontSizeBasedOnHeight = height * scaleFactor;
  return (
    Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, maxFontSize) * 0.8
  );
};

const Note = ({ id, onPointerDown, selectionColor, layer }: NoteProps) => {
  const { value, x, y, fill, width, height } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");
    liveLayers.get(id)?.set("value", newValue);
  }, []);
  
  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? RGBToHex(fill) : "#ccc",
      }}
      className="shadow-md drop-dhadow-xl"
    >
      <ContentEditable
        html={value || "Text"}
        onChange={(e: ContentEditableEvent) => {
          updateValue(e.target.value);
        }}
        className="h-full w-full flex items-center justify-center text-center outline-none font-kalam"
        style={{
          color: fill ? getContrastColor(fill) : "#fff",
          fontSize: calculateFontSize(width, height),
        }}
      />
    </foreignObject>
  );
};

export default Note;
