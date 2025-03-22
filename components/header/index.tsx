import Link from 'next/link'
import React from 'react'
import { navItems } from './navItems'

export const Header = () => {
    return (
        <header className='flex items-center justify-between h-12 w-full backdrop-blur-md bg-none fixed top-0 left-0'>
            <section className='container flex items-center justify-between '>
                <Link href='/' className='font-extrabold text-background'>
                    BLENDOT
                </Link>
                <nav className='hidden text-white md:block'>
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
