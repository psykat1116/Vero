import { Color } from "@/types/canvas";
import ColorButton from "@/components/canvas/ColorButton";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton onClick={onChange} color={{ r: 255, g: 0, b: 255 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 255, b: 255 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 255, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 0, b: 255 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 255, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 0, b: 0 }} />
      <ColorButton onClick={onChange} color={{ r: 255, g: 255, b: 255 }} />
      <ColorButton onClick={onChange} color={{ r: 0, g: 0, b: 0 }} />
    </div>
  );
};

export default ColorPicker;
