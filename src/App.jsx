import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Job from "./components/Job";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" m-0">
      <Navbar />
      <Tabs />
      <div className=" flex justify-between ">
        <Job />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
