import { Color } from "@/types/canvas";
import React from "react";
import ColorButton from "./ColorButton";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton onClick={onChange} color={{ r: 243, g: 82, b: 46 }} />
      <ColorButton onClick={onChange} color={{ r: 143, g: 192, b: 89 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 0, b: 55 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 230, b: 190 }} />
      <ColorButton onClick={onChange} color={{ r: 74, g: 140, b: 5 }} />
      <ColorButton onClick={onChange} color={{ r: 93, g: 205, b: 254 }} />
      <ColorButton onClick={onChange} color={{ r: 102, g: 100, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 0, b: 0 }} />
    </div>
  );
};

export default ColorPicker;
