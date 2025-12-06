import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <nav className="w-full md:w-fit lg:w-3/12">
        <Sidebar />
      </nav>
      <main className="flex w-full flex-col gap-2 lg:w-9/12">
        <header className="flex w-full items-center justify-between rounded bg-white px-4 py-2 shadow">
          <Header />
        </header>
        <section className="w-full rounded bg-white p-2 shadow">
          <Products />
        </section>
      </main>
    </>
  );
}

export default App;
