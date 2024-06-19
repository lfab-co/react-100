'use client'
import type { FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  AddTodo: (todoName: string) => void
}

const Modal = ({ isOpen, onClose, AddTodo }: ModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputText, setInputText] = useState<string>('')

  // when modal is opened, focus on input tag
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
    setInputText('')
  }, [isOpen])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    AddTodo(inputText)
  }

  return isOpen ? (
    <>
      {/* Overlay */}
      <div
        className="fixed left-0 top-0 size-full bg-black/50"
        onClick={() => onClose()}
      ></div>

      {/* Modal */}
      <div className="absolute left-1/2 top-1/2 z-20 size-2/5 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5">
        <form
          onSubmit={handleSubmit}
          className="flex size-full flex-col items-center justify-between"
        >
          <label className="mb-5 text-xl font-bold">新規追加</label>
          <input
            type="text"
            name="taskName"
            className="mb-5 w-full rounded-md border border-gray-300 p-2"
            ref={inputRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="task name"
          />
          <button
            type="submit"
            className="mb-5 w-full rounded-md bg-blue-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400"
            disabled={inputText.length === 0}
          >
            追加
          </button>
        </form>
      </div>
    </>
  ) : (
    <></>
  )
}

export default function Todo() {
  const [todo, setTodo] = useState<string[]>([])
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const AddTodo = (todoName: string) => {
    setTodo([...todo, todoName])
    setModalIsOpen(false)
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        AddTodo={AddTodo}
      />
      <div className="flex size-1/2 flex-col items-center rounded-2xl bg-white p-5">
        <h2 className="py-[5%] font-bold text-slate-500">Todo List</h2>
        <div className="flex h-4/5 w-full flex-col items-center justify-start overflow-scroll">
          {todo.map((task, index) => (
            <div
              key={index}
              className="flex w-4/5 flex-row items-center justify-between pb-3"
            >
              <p className="text-base font-medium">・{task}</p>
              <button
                className="aspect-square h-full rounded-full bg-red-300 text-center"
                onClick={() => {
                  setTodo(todo.filter((_, i) => i !== index))
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="h-[10%] w-4/5 rounded-md bg-blue-300 hover:bg-blue-500"
          onClick={() => setModalIsOpen(true)}
        >
          追加
        </button>
      </div>
    </div>
  )
}
