import { useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiListBullet } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { HiOutlinePower } from "react-icons/hi2";

function Sidebar({ switchMainContentHandler }) {
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <ul className="flex flex-col gap-2 rounded bg-white p-4 shadow">
      <li
        onClick={() => {
          switchMainContentHandler("dashboard");
          setActiveLink("dashboard");
        }}
        className={`${activeLink === "dashboard" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiOutlineSquares2X2 className="h-6 w-6" />
        <p>Dashboard</p>
      </li>
      <li
        onClick={() => {
          switchMainContentHandler("todolist");
          setActiveLink("todolist");
        }}
        className={`${activeLink === "todolist" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiListBullet className="h-6 w-6" />
        <p>To Do List</p>
      </li>
      <li
        onClick={() => {
          switchMainContentHandler("products");
          setActiveLink("products");
        }}
        className={`${activeLink === "products" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiOutlineShoppingBag className="h-6 w-6" />
        <p>Products</p>
      </li>
      <li
        onClick={() => {
          switchMainContentHandler("orders");
          setActiveLink("orders");
        }}
        className={`${activeLink === "orders" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiOutlineShoppingCart className="h-6 w-6" />
        <p>Orders</p>
      </li>
      <li
        onClick={() => {
          switchMainContentHandler("users");
          setActiveLink("users");
        }}
        className={`${activeLink === "users" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiOutlineUsers className="h-6 w-6" />
        <p>Users</p>
      </li>
      <li
        onClick={() => {
          switchMainContentHandler("messages");
          setActiveLink("messages");
        }}
        className={`${activeLink === "messages" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiOutlineChatBubbleLeftRight className="h-6 w-6" />
        <p>Messages</p>
      </li>
      <li
        onClick={() => {
          switchMainContentHandler("settings");
          setActiveLink("settings");
        }}
        className={`${activeLink === "settings" && "bg-blue-600 text-white"} flex cursor-pointer items-center gap-2 rounded px-4 py-2`}
      >
        <HiOutlineCog6Tooth className="h-6 w-6" />
        <p>Settings</p>
      </li>
      <li className="flex cursor-pointer items-center gap-2 px-4 py-2">
        <HiOutlinePower className="h-6 w-6" />
        <p>Log Out</p>
      </li>
    </ul>
  );
}

export default Sidebar;
