"use client"

import Link from 'next/link';
import React from 'react';

const linkList = [
    {
        id: 1,
        title: "Home",
        url:  "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
]

export default function Navbar() {
    return (
        <div>
            <Link key={1} href="/">Go to home</Link>
            <div>
                {linkList.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <button onClick={() => console.log("logged out")}>Logout</button>
        </div>
    )
}