import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import TodoList from "./components/TodoList/TodoList";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import Users from "./components/Users/Users";
import Messages from "./components/Messages/Messages";
import Settings from "./components/Settings/Settings";

function App() {
  const [mainContentHandler, setMainContentHandler] = useState("dashboard");

  return (
    <>
      <nav className="w-fit">
        <Sidebar switchMainContentHandler={setMainContentHandler} />
      </nav>
      <main className="flex w-full flex-col gap-2">
        <header className="flex w-full items-center justify-between rounded bg-white px-4 py-2 shadow">
          <Header />
        </header>
        <section className="w-full rounded bg-white p-2 shadow">
          {mainContentHandler === "dashboard" ? <Dashboard /> : null}
          {mainContentHandler === "todolist" ? <TodoList /> : null}
          {mainContentHandler === "products" ? <Products /> : null}
          {mainContentHandler === "orders" ? <Orders /> : null}
          {mainContentHandler === "users" ? <Users /> : null}
          {mainContentHandler === "messages" ? <Messages /> : null}
          {mainContentHandler === "settings" ? <Settings /> : null}
        </section>
      </main>
    </>
  );
}

export default App;
