import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Try harder next time</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}