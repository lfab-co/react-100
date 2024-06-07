'use client'
import { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <h1 className="text-center text-4xl">React Counter</h1>
        <h2 className="m-10 text-center text-6xl">{count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="m-3 size-24 rounded-full bg-red-200 text-3xl"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="m-3 size-24 rounded-full bg-red-50 text-3xl"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
