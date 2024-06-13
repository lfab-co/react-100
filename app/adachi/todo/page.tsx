'use client'
import { useState } from 'react'

interface AppProps {
  initialText?: string
}

const App = ({ initialText = '' }: AppProps): JSX.Element => {
  const [text, setText] = useState<string>(initialText)
  const [tasks, setTasks] = useState<string[]>([])
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleButtonClick = () => {
    setIsInputVisible(true)
    setError('') // エラーをクリア
  }

  const handleAddTask = () => {
    if (text.trim() === '') {
      setError('タスクを入力してください')
      return
    }
    setTasks([...tasks, text]) // 新しいタスクを追加
    setText('') // タスク追加後に入力欄をクリア
    setIsInputVisible(false) // 入力欄を非表示にする
    setError('') // エラーをクリア
  }

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index) // 指定されたインデックスのタスクを削除
    setTasks(newTasks)
  }

  return (
    <div className="App flex h-80 flex-col items-center justify-center text-lg">
      <h1 className="text-4xl">TODO List</h1>
      {!isInputVisible && (
        <button onClick={handleButtonClick} className="bg-green-600 text-3xl">
          +
        </button>
      )}
      {isInputVisible && (
        <div>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={handleAddTask}>追加</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}{' '}
          {/* エラーメッセージを表示 */}
        </div>
      )}
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>×</button>{' '}
            {/* 削除ボタンを追加 */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
