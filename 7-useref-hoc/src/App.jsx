import Input from "./ref-components/input";
import Scroll from "./ref-components/scroll";
import Counter from "./ref-components/counter";
import Timer from "./ref-components/timer";

const App = () => {
  return (
    <div className="p-5 d-flex flex-column gap-5">
      <Timer />

      <Counter />

      <Scroll />

      <Input />
    </div>
  );
};

export default App;
