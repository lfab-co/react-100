import Link from 'next/link'

export default function Kajiwara() {
  return (
    <div>
      <Link href="/kajiwara/hello-world">001 Hello World</Link>
      <br />
      <Link href="/kajiwara/counter">002 counter</Link>
      <br />
      <Link href="/kajiwara/todo">003 todo</Link>
    </div>
  )
}
