import { memo } from "react";
import { useStorage } from "@liveblocks/react";

import { RGBToHex } from "@/lib/color";
import Text from "@/components/tool/Text";
import Note from "@/components/tool/Note";
import Path from "@/components/tool/Path";
import { LayerType } from "@/types/canvas";
import Ellipse from "@/components/tool/Ellipse";
import Rectangle from "@/components/tool/Rectangle";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) {
      return null;
    }

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
          />
        );
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            stroke={selectionColor}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? RGBToHex(layer.fill) : "#000"}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
          />
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
export default LayerPreview;
