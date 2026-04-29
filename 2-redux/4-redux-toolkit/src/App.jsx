import Counter from "./pages/counter";
import Crud from "./pages/crud";

const App = () => {
  return (
    <div className="p-5 md:p-10 max-w-7xl mx-auto bg-zinc-100 min-h-screen">
      <Crud />
    </div>
  );
};

export default App;
