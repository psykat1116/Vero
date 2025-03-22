import { RGBToHex } from "@/lib/color";
import { Color } from "@/types/canvas";

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 cursor-pointer transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: RGBToHex(color),
        }}
      />
    </button>
  );
};

export default ColorButton;
