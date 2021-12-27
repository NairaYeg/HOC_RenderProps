import { useState } from "react";

export const WithCounter = ({ WrappedComponent }) => {
    const [count, setCount] = useState(0);

    const handleIncrementCount = () => {
        setCount(count + 1);
    }

    return <WrappedComponent count={count} handleIncrementCount={handleIncrementCount} />
}