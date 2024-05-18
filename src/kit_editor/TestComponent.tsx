import React from "react"

export const TestComponent: React.FC<{}> = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}
