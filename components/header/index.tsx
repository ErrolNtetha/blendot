import Link from 'next/link'
import React from 'react'
import { navItems } from './navItems'

export const Header = () => {
    return (
        <header className='flex items-center justify-between shadow-md h-12 w-full'>
            <section className='container flex items-center justify-between '>
                <Link href='/' className='font-extrabold'>
                    VEGCENTER
                </Link>
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {navItems.map((item) => (
                            <li key={item.id}> 
                                <Link href={item.href}> {item.name} </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    )
}
