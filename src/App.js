import { ClickCounter } from "./components/ClickCounter";
import { HoverCounter } from "./components/HoverCounter";
import { WithCounter } from "./components/WithCounter";
import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <ClickCounter count={count} handleClick={setCount} />
      <HoverCounter count={count} handleIncrementCount={setCount} /> */}
      {/* //  <Counter
    //     render={(count, handleIncrementCount) => (
    //       <HoverCounter
    //         count={count}
    //         handleIncrementCount={handleIncrementCount}
    //       />
    //     )}
    //   />  */}
      <div>
        <h4>This code is written using the HOC pattern. </h4>
        <Counter>
          {(count, handleIncrementCount) => (
            <HoverCounter
              count={count}
              handleIncrementCount={handleIncrementCount}
            />
          )}
        </Counter>
        <Counter>
          {(count, handleIncrementCount) => (
            <ClickCounter
              count={count}
              handleIncrementCount={handleIncrementCount}
            />
          )}
        </Counter>
      </div>
      <div>
        <h4>This code is written using the RenderProps pattern. </h4>
        <WithCounter WrappedComponent={ClickCounter} />
        <WithCounter WrappedComponent={HoverCounter} />
      </div>
    </>
  );
}

export default App;
