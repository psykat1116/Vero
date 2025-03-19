const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const IdToColor = (id: number) => {
  return COLORS[id % COLORS.length];
};
