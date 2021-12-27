
export function ClickCounter({ count, handleIncrementCount }) {

    return <button onClick={() => handleIncrementCount(count + 1)}>Count is {count}</button>
}