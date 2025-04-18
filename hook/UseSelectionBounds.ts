import { Layer, XYWH } from "@/types/canvas";

import { shallow } from "@liveblocks/react";
import { useStorage, useSelf } from "@liveblocks/react";

// * This Function Takes an Array of Layers and Returns The Bounding Box Of The Layers.

const boundingBox = (layers: Layer[]): XYWH | null => {
  const first = layers[0];
  if (first) {
    let left = first.x;
    let top = first.y;
    let right = first.x + first.width;
    let bottom = first.y + first.height;

    for (let i = 1; i < layers.length; i++) {
      const { x, y, height, width } = layers[i];
      if (left > x) {
        left = x;
      }
      if (right < x + width) {
        right = x + width;
      }
      if (top > y) {
        top = y;
      }
      if (bottom < y + height) {
        bottom = y + height;
      }
    }

    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top,
    };
  }

  return null;
};

// * This Hook Returns The Bounding Box Of The Selected Layers.

export const useSelectionBounds = () => {
  const selection = useSelf((me) => me.presence.selection);

  return useStorage((root) => {
    const selectedLayer = selection
      ?.map((layerId) => root.layers.get(layerId)!)
      .filter(Boolean);

    return boundingBox(selectedLayer!);
  }, shallow);
};
