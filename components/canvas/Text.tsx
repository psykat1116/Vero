import React from "react";
import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { cn } from "@/lib/utils";
import { RGBToHex } from "@/lib/color";
import { useMutation } from "@liveblocks/react";
import { TextLayer } from "@/types/canvas";

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

interface TextProps {
  id: string;
  layer: TextLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96;
  const scaleFactor = 0.5;
  const fontSizeBasedOnWidth = width * scaleFactor;
  const fontSizeBasedOnHeight = height * scaleFactor;
  return (
    Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, maxFontSize) * 0.8
  );
};

const Text = ({ id, layer, onPointerDown, selectionColor }: TextProps) => {
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
      }}
    >
      <ContentEditable
        html={value || "Text"}
        onChange={(e: ContentEditableEvent) => {
          updateValue(e.target.value);
        }}
        className={cn(
          "h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none",
          font.className
        )}
        style={{
          color: fill ? RGBToHex(fill) : "#000",
          fontSize: calculateFontSize(width, height),
        }}
      />
    </foreignObject>
  );
};

export default Text;
