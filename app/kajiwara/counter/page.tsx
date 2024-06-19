'use client'
import { useState } from 'react'

const Counter = () => {
  // 押した回数を保持する状態変数 pushCount を宣言
  const [pushCount, setCount] = useState(0)

  // pushCount変数をインクリメント
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  // pushCount変数をデクリメント
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[50%] w-[30%] flex-col items-center justify-between rounded-2xl bg-blue-100">
        <h1 className="mt-3 text-3xl">React Counter</h1>
        <h2 className="text-6xl font-bold">{pushCount}</h2>

        <div>
          <button
            onClick={incrementCount}
            className="m-3 size-24 rounded-full bg-blue-300 text-3xl hover:bg-blue-200"
          >
            +1
          </button>
          <button
            onClick={decrementCount}
            className="m-3 size-24 rounded-full bg-red-300 text-3xl hover:bg-red-200"
          >
            -1
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
