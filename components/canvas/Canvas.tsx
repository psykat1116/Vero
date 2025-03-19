"use client";
import CanvasInfo from "./CanvasInfo";
import Participants from "./Participants";
import Toolbar from "./Toolbar";
import { useState } from "react";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory, useSelf } from "@liveblocks/react";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  const history = useHistory();

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <CanvasInfo boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};

export default Canvas;
