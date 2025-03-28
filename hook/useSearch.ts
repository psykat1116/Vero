"use client";
import { useSearchParams } from "next/navigation";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const favorites = searchParams.get("favorites") || "";
  return { search, favorites };
};
