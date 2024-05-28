import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import NavItem from "./components/NavItem";

function App() {
  return (
    <>
      <div className=" h-svh p-5 w-full">
        <Nav />
        <NavItem/>
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
