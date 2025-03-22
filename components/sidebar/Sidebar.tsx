import OrgList from "@/components/sidebar/OrgList";
import CreateOrg from "@/components/sidebar/CreateOrg";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-900/50 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <OrgList />
      <CreateOrg />
    </aside>
  );
};

export default Sidebar;
