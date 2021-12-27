import { useState } from "react";

export function Counter(props) {
    const [count, setCount] = useState(0);

    const handleIncrementCount = () => {
        setCount(count + 1);
    };

    return props.children(count, handleIncrementCount)
}