'use client'
import { useState } from 'react'

export default function Todo() {
  const [text, setText] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false)
  enum TodoNameValidationErrors {
    EMPTY = 'タスクを入力してください',
  }
  const [error, setError] = useState<TodoNameValidationErrors | null>(null)

  const handleButtonClick = () => {
    setIsInputVisible(true)
    setError(null) // エラーをクリア
  }

  const handleAddTask = () => {
    if (text.trim() === '') {
      setError(TodoNameValidationErrors.EMPTY)
      return
    }
    setTasks([...tasks, text]) // 新しいタスクを追加
    setText('') // タスク追加後に入力欄をクリア
    setIsInputVisible(false) // 入力欄を非表示にする
    setError(null) // エラーをクリア
  }

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index) // 指定されたインデックスのタスクを削除
    setTasks(newTasks)
  }

  const handleCancel = () => {
    setIsInputVisible(false)
    setText('')
    setError(null)
  }

  return (
    <div className="App flex h-80 flex-col items-center justify-center font-mono text-lg">
      <h1 className="m-8 text-4xl font-bold">TODO List</h1>
      {!isInputVisible ? (
        <button
          onClick={handleButtonClick}
          className="rounded-full bg-green-600 px-10 text-xl text-white"
        >
          ＋
        </button>
      ) : (
        <div className="text-center">
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="rounded-md bg-gray-100 ring-2 ring-black"
          />
          <br />
          {error && <div className="m-1 text-center text-red-500">{error}</div>}
          {/* エラーメッセージを表示 */}
          <div className="mt-5">
            <button
              onClick={handleAddTask}
              className="mr-5 rounded-full bg-green-600 px-10 text-white"
            >
              保存
            </button>
            <button
              onClick={handleCancel}
              className="rounded-full bg-gray-600 px-10 text-white"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}
      <div className="p-5 text-right">
        {tasks.map((task, index) => (
          <div key={index} className="m-3">
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="ml-10 rounded-full bg-white px-3 ring-1 ring-gray-200"
            >
              ×
            </button>
            {/* 削除ボタンを追加 */}
          </div>
        ))}
      </div>
    </div>
  )
}
