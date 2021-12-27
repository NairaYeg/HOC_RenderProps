
export function HoverCounter({ count, handleIncrementCount }) {

    return <h3 onMouseEnter={() => handleIncrementCount(count + 1)}>Count is {count}</h3>
}