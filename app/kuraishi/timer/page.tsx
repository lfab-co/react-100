'use client'
import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0)
  const [totalSeconds, setTotalSeconds] = useState<number>(0)
  const [isStop, setIsStop] = useState<boolean>(false)

  useEffect(() => {
    if (!isStop && remainingSeconds > 0) {
      const interval = setInterval(() => {
        setRemainingSeconds((prevRemainingTime) => prevRemainingTime - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isStop, remainingSeconds])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const minitus = Number(e.currentTarget.minutes.value)
    const seconds = Number(e.currentTarget.seconds.value)
    if (0 <= minitus && 0 <= seconds) {
      const totalSeconds = minitus * 60 + seconds
      setRemainingSeconds(totalSeconds)
      setIsStop(true)
      setTotalSeconds(totalSeconds)
    }
  }

  const progressBarPercentage = (remainingSeconds / totalSeconds) * 100

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <div className="flex size-1/2 flex-col items-center justify-between rounded-2xl bg-white p-5">
        <h2 className="h-[10%] font-bold text-slate-500">Timer</h2>
        <div className="flex h-[10%] w-full flex-col items-center justify-center">
          <h3>
            {remainingSeconds} / {totalSeconds} 秒
          </h3>
          <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{ width: `${progressBarPercentage}%` }}
            ></div>
          </div>
        </div>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className="flex h-1/2 w-full flex-col items-center justify-around"
        >
          <div className="flex w-4/5 flex-row justify-around pt-[10%]">
            <p className="w-2/5">
              <input
                className="w-4/5 rounded-md border border-gray-300 text-right"
                type="text"
                inputMode="numeric"
                name="minutes"
              />
              分
            </p>
            <p className="w-2/5">
              <input
                className="w-4/5 rounded-md border border-gray-300 text-right"
                type="text"
                inputMode="numeric"
                name="seconds"
              />
              秒
            </p>
          </div>
          <button
            type="submit"
            className="mb-[5%] h-1/5 w-4/5 rounded-md bg-blue-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Set Timer
          </button>
        </form>
        <div className="flex h-[30%] w-full flex-row justify-around">
          <button
            className="aspect-square h-3/4 rounded-full bg-blue-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400"
            onClick={() => setIsStop(!isStop)}
          >
            {isStop ? 'Start' : 'Stop'}
          </button>
          <button
            className="aspect-square h-3/4 rounded-full bg-blue-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400"
            onClick={() => {
              setRemainingSeconds(totalSeconds)
              setIsStop(true)
            }}
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  )
}
