"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
// import { navItems } from './navItems'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

    return (
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#F8F5F2]-90% backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <section className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl text-[#5C4033]">Blendot</span>
            {/* <Image 
                src={'/logo.png'}
                alt='Blendot logo'
                width={100}
                height={100}
            /> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              About
            </Link>
            <Link href="#how-it-works" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              FAQ
            </Link>
            <Link href="#community" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              Services
            </Link>
            <Link href="#community" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              Contact
            </Link>
            <section className='flex gap-2'>
                <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white" onClick={() => router.push('/register')}>Join Now</Button>
                <Button variant={'outline'} className="hover:bg-[#8B4513] hover:text-white" asChild>
                    <Link href='/login'>
                        Login
                    </Link>
                </Button>
            </section>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#5C4033]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </section>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8F5F2] border-t border-[#E8DFD8]"
          >
            <section className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#about"
                className="text-[#5C4033] hover:text-[#A05C42] transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-[#5C4033] hover:text-[#A05C42] transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#community"
                className="text-[#5C4033] hover:text-[#A05C42] transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white w-full">Join Now</Button>
            </section>
          </motion.section>
        )}
      </header>
    )
}
