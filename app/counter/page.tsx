'use client'
import { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-center">React Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter
