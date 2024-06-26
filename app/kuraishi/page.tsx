import Link from 'next/link'
export default function Kuraishi() {
  return (
    <div>
      <h1>this is kuraishi page</h1>
      <Link href="/kuraishi/hello-world">hello-world 001</Link>
      <br />
      <Link href="/kuraishi/counter">counter 002</Link>
      <br />
      <Link href="/kuraishi/todo">todo 003</Link>
    </div>
  )
}
