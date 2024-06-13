import Link from 'next/link'

export default function Adachi() {
  return (
    <div>
      <Link href="/adachi/hello-world">001 hello-world</Link>
      <br />
      <Link href="/adachi/counter">002 counter</Link>
    </div>
  )
}
