import { Color } from "@/types/canvas";

const COLORS = [
  "#DC2626",
  "#D97706",
  "#059669",
  "#7C3AED",
  "#DB2777",
  "#32174D",
  "#494F55",
  "#EEDC82",
  "#F3E5AB",
  "#EDF1FE",
  "#CD7F32",
  "#B1832F",
  "#D1BEA8",
  "#CAE00D",
  "#00FFFF",
  "#4CBB17",
  "#3CB371",
  "#DFC98A",
  "#737CA1",
  "#FF00FF",
  "#FF0090",
  "#00FFEF",
  "#007FFF",
  "#DF00FF",
  "#DA70D6",
  "#FF8F00",
  "#FD5E53",
  "#FF6FFF",
  "#F78FA7",
  "#FF66CC",
];

// * ------------------------ Generate Random Color For Each User ------------------------ * //

export const IdToColor = (id: number) => {
  return COLORS[id % COLORS.length];
};

// * ------------------------ Convert RGB To Hex ------------------------ * //

export const RGBToHex = (color: Color) => {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
};

// * ------------------------ Get Contrast Color For Text ------------------------ * //

export const getContrastColor = (color: Color) => {
  const luminance = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
  return luminance > 182 ? "#000" : "#fff";
};
