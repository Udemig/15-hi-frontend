import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../../redux/slices/counterSlice";

const Counter = () => {
  // abone olma işlevi klasik redux ile aynı
  const { count } = useSelector((store) => store.counterReducer);

  // aksiyon dispatch işlevi klasik redux ile aynı
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
      <button onClick={() => dispatch(decrease())}>Azalt</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increase())}>Arttır</button>
    </div>
  );
};

export default Counter;
