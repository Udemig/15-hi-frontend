import city from "./assets/city.jpg";
import Counter from "./components/counter";
import Lamb from "./components/lamb";
import BuyList from "./components/buy-list";

function App() {
  return (
    <div className="App">
      <BuyList />

      <Lamb />

      <Counter />

      {/* src içerisinde tutulan resim 
      <img src={city} width={400} />

      public içerisinde tutulan resim
      <img src="/bird.jpg" width={400} /> */}
    </div>
  );
}

export default App;
