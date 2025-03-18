"use client";
import { use } from "react";
import BoardList from "@/components/board/BoardList";
import EmptyOrganization from "@/components/empty/EmptyOrganization";
import { useOrganization } from "@clerk/nextjs";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string;
    favorites?: string;
  }>;
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { search, favorites } = use(searchParams);
  const { organization } = useOrganization();
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrganization />
      ) : (
        <BoardList orgId={organization.id} search={search} favorites={favorites} />
      )}
    </div>
  );
};

export default DashboardPage;
