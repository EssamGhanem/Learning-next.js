'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "ForGetPassword", href: "/forget-password" },
]

export default function AuthLayout({
  children,
  users
}: {
  children: React.ReactNode;
  users:React.ReactNode;
}) {

  const pathname = usePathname();

  const [input,setInput] = useState('');
  console.log("User : "+users);
  return (
    <>
      {users}
      <div>
        
        <ul>
        {navLinks.map((link)=>{
          const isActive:boolean = link.href == pathname;
          return(<li key={link.name}><Link href={`${link.href}`} className={isActive?"isActive":""}>{link.name}</Link></li>);
        })}
        </ul>

      </div>
      {children}

        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

      
    </>

  )
}
