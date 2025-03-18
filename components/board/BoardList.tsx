import EmptyBoards from "../empty/EmptyBoards";
import EmptyFavorites from "../empty/EmptyFavorites";
import EmptySearch from "../empty/EmptySearch";

interface BoardListProps {
  orgId: string;
  search?: string;
  favorites?: string;
}

const BoardList = ({ orgId, search, favorites }: BoardListProps) => {
  const data = []; // TODO: Fetch data from API

  if (!data?.length && search) {
    return <EmptySearch />;
  }

  if (!data?.length && favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>BoardList</div>;
};

export default BoardList;
