import Link from "next/link";

export default async function NextPage() {  
  return (
    <main>
      <Link href="/">Previous page</Link>
      <Link href="/next-page/deeper-page">Next page</Link>
    </main>
  )
}
