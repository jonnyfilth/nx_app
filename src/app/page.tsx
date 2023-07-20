// 'use client';
import Navbar from "@/components/basicos/Navbar"
import Teste from "@/components/basicos/Teste";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      {/* <Navbar/> */}
      {/* @ts-expect-error Async Server Component */}
      <Teste url="http://localhost:3000/api/server/users/" />

    </div>
  )
}
