"use client";
import Canvas from "@/components/canvas/Canvas";
import Loading from "@/components/canvas/Loading";
import Room from "@/components/Room";
import { use } from "react";

interface BoardIDPageProps {
  params: Promise<{ boardId: string }>;
}

const BoardIDPage = ({ params }: BoardIDPageProps) => {
  const { boardId } = use(params);
  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIDPage;
