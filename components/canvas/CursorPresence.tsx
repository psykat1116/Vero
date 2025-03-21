"use client";
import { memo } from "react";
import { useOthersConnectionIds } from "@liveblocks/react";
import Cursor from "./Cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((id) => (
        <Cursor key={id} connectionId={id} />
      ))}
    </>
  );
};

const CursorPresence = memo(() => {
  return (
    <>
      {/** TODO: Draft Pencil */}
      <Cursors />
    </>
  );
});

CursorPresence.displayName = "CursorPresence";
export default CursorPresence;