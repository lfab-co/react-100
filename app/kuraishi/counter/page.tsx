'use client'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <div className=" flex h-[30%] w-[15%] flex-col items-center justify-between rounded-2xl bg-white">
        <h2 className="pt-[10%] font-bold text-slate-500">React Counter</h2>
        <h1 className="text-5xl font-bold text-blue-700">{count}</h1>
        <div className="mb-[20%] flex h-1/5 w-full justify-around">
          <button
            className="aspect-square h-3/4 rounded-full border border-blue-700 bg-blue-700 text-white"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="aspect-square h-3/4 rounded-full border border-blue-700"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}
