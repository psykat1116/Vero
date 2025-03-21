import { Color } from "@/types/canvas";

const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const IdToColor = (id: number) => {
  return COLORS[id % COLORS.length];
};

export const RGBToHex = (color: Color) => {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
};
