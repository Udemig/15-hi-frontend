import Counter from "./pages/counter";
import Crud from "./pages/crud";
import Users from "./pages/users";

const App = () => {
  return (
    <div className="p-5 md:p-10 max-w-7xl mx-auto bg-zinc-100 min-h-screen">
      <Users />
    </div>
  );
};

export default App;
