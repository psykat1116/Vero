import { memo } from "react";
import { useMutation, useSelf } from "@liveblocks/react";
import { BringToFront, SendToBack, Trash2 } from "lucide-react";

import Hint from "@/components/Hint";
import { Camera, Color } from "@/types/canvas";
import { Button } from "@/components/ui/button";
import { useDeleteLayer } from "@/hook/UseDeleteLayer";
import ColorPicker from "@/components/canvas/ColorPicker";
import { useSelectionBounds } from "@/hook/UseSelectionBounds";

interface SelectionToolProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

const SelectionTool = memo(
  ({ camera, setLastUsedColor }: SelectionToolProps) => {
    const selection = useSelf((self) => self.presence.selection);
    const selectionBounds = useSelectionBounds();
    const deleteLayers = useDeleteLayer();

    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();
        for (let i = 0; i < arr.length; i++) {
          if (selection?.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i);
        }
      },
      [selection]
    );

    const bringToFront = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();
        for (let i = 0; i < arr.length; i++) {
          if (selection?.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i)
          );
        }
      },
      [selection]
    );

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        console.log("selection", fill);

        selection?.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [setLastUsedColor, selection]
    );

    if (!selectionBounds) {
      return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none z-10"
        style={{
          transform: `translate(calc(${x}px - 50%), calc(${y - 16}px - 100%))`,
        }}
      >
        <ColorPicker onChange={setFill} />
        <div className="flex flex-col gap-y-0.5">
          <Hint label="Bring To Front">
            <Button variant="board" size="icon" onClick={bringToFront}>
              <BringToFront />
            </Button>
          </Hint>
          <Hint label="Send To Back" side="bottom">
            <Button variant="board" size="icon" onClick={moveToBack}>
              <SendToBack />
            </Button>
          </Hint>
        </div>
        <div className="flex items-center pl-2 ml-2 border-l border-neutral-200">
          <Hint label="Delete">
            <Button variant="board" size="icon" onClick={deleteLayers}>
              <Trash2 />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

SelectionTool.displayName = "SelectionTool";

export default SelectionTool;
