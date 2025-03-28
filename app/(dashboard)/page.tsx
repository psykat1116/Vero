"use client";
import { use, useEffect, useState } from "react";
import { useOrganization } from "@clerk/nextjs";

import BoardList from "@/components/board/BoardList";
import EmptyOrganization from "@/components/empty/EmptyOrganization";
import { useSearch } from "@/hook/useSearch";

const DashboardPage = () => {
  const [mounted, setMounted] = useState(false);
  const { search, favorites } = useSearch();
  const { organization } = useOrganization();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrganization />
      ) : (
        <BoardList
          orgId={organization.id}
          search={search}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default DashboardPage;
