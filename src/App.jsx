import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import TodoList from "./components/TodoList/TodoList";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import Users from "./components/Users/Users";
import Messages from "./components/Messages/Messages";
import Settings from "./components/Settings/Settings";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [mainContentHandler, setMainContentHandler] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <nav
        className={`fixed right-0 left-0 z-50 w-full md:static md:block md:w-fit ${
          isSidebarOpen ? "bottom-0" : "-bottom-full"
        } transition-all`}
      >
        <Sidebar switchMainContentHandler={setMainContentHandler} />
      </nav>

      <main className="flex w-full flex-col gap-2">
        <header className="flex w-full items-center justify-between rounded bg-white px-2 py-2 shadow md:px-4">
          <Header switchIsSidebarOpen={setIsSidebarOpen} />
        </header>

        <section className="w-full rounded bg-white p-2 shadow">
          {mainContentHandler === "dashboard" && <Dashboard />}
          {mainContentHandler === "todolist" && <TodoList />}
          {mainContentHandler === "products" && <Products />}
          {mainContentHandler === "orders" && <Orders />}
          {mainContentHandler === "users" && <Users />}
          {mainContentHandler === "messages" && <Messages />}
          {mainContentHandler === "settings" && <Settings />}
        </section>
      </main>
    </>
  );
}

export default App;
