import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/hello-world">001 hello-world</Link>
      <br />
      <Link href="/counter">002 counter</Link>
    </div>
  )
}
