import { HiMiniHome } from "react-icons/hi2";
import { HiShoppingBag } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiCog6Tooth } from "react-icons/hi2";

function Sidebar() {
  return (
    <ul className="flex flex-row justify-between gap-0 rounded bg-white p-2 shadow sm:gap-2 sm:p-4 md:sticky md:top-4 md:flex-col lg:p-8">
      <li className="activeNav text-text flex w-fit cursor-pointer items-center justify-center gap-2 rounded p-2 sm:w-full sm:p-3 md:w-full lg:justify-start">
        <HiMiniHome className="h-6 w-6" />
        <p className="hidden lg:block">Dashboard</p>
      </li>
      <li className="text-text mid:w-full flex w-fit cursor-pointer items-center justify-center gap-2 rounded p-2 sm:w-full sm:p-3 lg:justify-start">
        <HiShoppingBag className="h-6 w-6" />
        <p className="hidden lg:block">Products</p>
      </li>
      <li className="text-text mid:w-full flex w-fit cursor-pointer items-center justify-center gap-2 rounded p-2 sm:w-full sm:p-3 lg:justify-start">
        <HiShoppingCart className="h-6 w-6" />
        <p className="hidden lg:block">Order</p>
      </li>
      <li className="text-text mid:w-full flex w-fit cursor-pointer items-center justify-center gap-2 rounded p-2 sm:w-full sm:p-3 lg:justify-start">
        <HiUsers className="h-6 w-6" />
        <p className="hidden lg:block">Users</p>
      </li>
      <li className="text-text mid:w-full flex w-fit cursor-pointer items-center justify-center gap-2 rounded p-2 sm:w-full sm:p-3 lg:justify-start">
        <HiChatBubbleLeftRight className="h-6 w-6" />
        <p className="hidden lg:block">Messages</p>
      </li>
      <li className="text-text mid:w-full flex w-fit cursor-pointer items-center justify-center gap-2 rounded p-2 sm:w-full sm:p-3 lg:justify-start">
        <HiCog6Tooth className="h-6 w-6" />
        <p className="hidden lg:block">Settings</p>
      </li>
    </ul>
  );
}

export default Sidebar;
