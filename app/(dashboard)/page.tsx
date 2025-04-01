"use client";
import { useOrganization } from "@clerk/nextjs";

import BoardList from "@/components/board/BoardList";
import EmptyOrganization from "@/components/empty/EmptyOrganization";

const DashboardPage = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrganization />
      ) : (
        <BoardList orgId={organization.id} />
      )}
    </div>
  );
};

export default DashboardPage;
