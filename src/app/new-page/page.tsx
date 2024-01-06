import Link from "next/link"

export default async function NewPage() {  
  return (
    <main>
      <Link href='/'>Previous page</Link>
      <Link href='/new-page/deeper-page'>Next page</Link>
    </main>
  )
}