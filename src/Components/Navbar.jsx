"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()
    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Services",
            path: '/services'
        }
    ]
    const handler = () => {
        router.push('/login');
    }
  return (
    <div>
      <nav className="flex justify-between bg-emerald-200 items-center px-6 py-4">
        <h6 className=" font-bold text-3xl font-sans">Next Hero</h6>
        <ul className=" flex bg-emerald-200  gap-4">
          {
            links.map((link) => <Link className={`${pathName === link.path && "text-cyan-700 font-bold text-lg "}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
        <button onClick={handler} className=" bg-emerald-400 rounded-lg px-2">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
