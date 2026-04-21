import city from "./assets/city.jpg";
import Counter from "./components/counter";
import Lamb from "./components/lamb";
import BuyList from "./components/buy-list";
import FunctionComponent from "./diffrence/function-component";
import ClassComponent from "./diffrence/class-component";
import UserList from "./components/user-list";
import RecipePicker from "./components/recipe-picker";
import Countdown from "./components/countdown";

import { useState } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsHidden(!isHidden)}>Gizle Göster</button>

      {!isHidden && (
        <>
          <Countdown />
        </>
      )}

      {/* <RecipePicker /> */}
      {/* <UserList /> */}
      {/* <FunctionComponent title="Fonksiyonel Bileşen" /> */}
      {/* <ClassComponent title="Sınıf Bileşen" /> */}

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
