"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Leaf,
  Flower2,
  Users,
  MapPin,
  Search,
  Menu,
  X,
  MessageCircle,
  SproutIcon as Seedling,
  Sun,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#F8F5F2]-90% backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Flower2 className="h-8 w-8 text-[#A05C42]" />
            <span className="font-serif font-bold text-xl text-[#5C4033]">SeedSwap</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              About
            </Link>
            <Link href="#how-it-works" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              How It Works
            </Link>
            <Link href="#community" className="text-[#5C4033] hover:text-[#A05C42] transition-colors font-medium">
              Community
            </Link>
            <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white">Join Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#5C4033]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F8F5F2] border-t border-[#E8DFD8]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
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
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#E8DFD8] opacity-50"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <div className="inline-block bg-[#A05C42]-10% text-[#A05C42] px-4 py-1 rounded-full text-sm font-medium">
                Community Gardening Reimagined
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5C4033] leading-tight">
                Share seeds, grow community
              </h1>
              <p className="text-lg text-[#5C4033]-80% md:pr-12">
                Connect with fellow gardeners in your neighborhood to exchange seeds, seedlings, and harvest. Cultivate
                relationships while growing your garden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 px-6 text-base rounded-full">
                  Start Sharing
                </Button>
                <Button
                  variant="outline"
                  className="border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]-10% h-12 px-6 text-base rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="People gardening together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="bg-[#A05C42]-10% p-2 rounded-full">
                    <Users className="h-5 w-5 text-[#A05C42]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5C4033]">Join 5,000+ gardeners</p>
                    <p className="text-xs text-[#5C4033]-70%">in your local area</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 top-1/4 bg-white p-3 rounded-full shadow-lg">
                <Seedling className="h-6 w-6 text-[#A05C42]" />
              </div>
              <div className="absolute right-12 top-10 bg-white p-3 rounded-full shadow-lg">
                <Leaf className="h-6 w-6 text-[#A05C42]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-[#E8DFD8]"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#5C4033] mb-6">
              Find garden treasures near you
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-[#A05C42]" />
                <Input
                  placeholder="Tomato seeds, herb plants..."
                  className="pl-10 h-12 border-[#E8DFD8] focus-visible:ring-[#A05C42] rounded-full"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#A05C42]" />
                <Input
                  placeholder="Your location"
                  className="pl-10 h-12 border-[#E8DFD8] focus-visible:ring-[#A05C42] rounded-full"
                />
              </div>
              <Button className="h-12 bg-[#A05C42] hover:bg-[#8B4513] text-white rounded-full">Search</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-[#5C4033]-70%">Popular:</span>
              <button className="text-sm bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Tomato Seeds
              </button>
              <button className="text-sm bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Herb Plants
              </button>
              <button className="text-sm bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Vegetable Seedlings
              </button>
              <button className="text-sm bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Flower Bulbs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-[#E8DFD8]-30%">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Why Join SeedSwap?</h2>
            <p className="text-lg text-[#5C4033]-80%">
              Our community helps you connect with fellow gardeners, share your bounty, and grow together in a
              sustainable way.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemFadeIn} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]">
              <div className="bg-[#A05C42]-10% w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Seedling className="h-8 w-8 text-[#A05C42]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Share & Exchange</h3>
              <p className="text-[#5C4033]-80% text-center">
                Trade seeds, seedlings, and surplus harvest with neighbors. Reduce waste while expanding your garden
                variety.
              </p>
            </motion.div>

            <motion.div variants={itemFadeIn} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]">
              <div className="bg-[#A05C42]-10% w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-[#A05C42]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Build Community</h3>
              <p className="text-[#5C4033]-80% text-center">
                Connect with gardeners in your area, share knowledge, and cultivate meaningful relationships.
              </p>
            </motion.div>

            <motion.div variants={itemFadeIn} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]">
              <div className="bg-[#A05C42]-10% w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sun className="h-8 w-8 text-[#A05C42]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Grow Sustainably</h3>
              <p className="text-[#5C4033]-80% text-center">
                Promote eco-friendly gardening practices through sharing resources and reducing waste.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#F8F5F2] opacity-50"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">How SeedSwap Works</h2>
            <p className="text-lg text-[#5C4033]-80%">
              Join our community in three simple steps and start sharing today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-[#A05C42]-30% z-0"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFD8] shadow-md">
                <div className="bg-[#A05C42] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Create Your Profile</h3>
                <p className="text-[#5C4033]-80% text-center">
                  Sign up and tell us about your garden, what you're growing, and what you're looking for.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFD8] shadow-md">
                <div className="bg-[#A05C42] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">List Your Offerings</h3>
                <p className="text-[#5C4033]-80% text-center">
                  Add the seeds, plants, or produce you want to share or trade with the community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFD8] shadow-md">
                <div className="bg-[#A05C42] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Connect & Exchange</h3>
                <p className="text-[#5C4033]-80% text-center">
                  Message other gardeners, arrange meetups, and exchange your garden treasures.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 px-8 text-base rounded-full">
              Join Our Community
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 md:py-24 bg-[#E8DFD8]-30%">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Recently Shared Items</h2>
            <p className="text-lg text-[#5C4033]-80%">Browse what gardeners in your community are currently sharing.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                variants={itemFadeIn}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8DFD8] group"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Item ${item}`}
                    alt={`Garden item ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-[#5C4033]">
                      {item === 1 && "Heirloom Tomato Seeds"}
                      {item === 2 && "Basil Seedlings"}
                      {item === 3 && "Dahlia Bulbs"}
                      {item === 4 && "Fresh Zucchini"}
                    </h3>
                    <span className="bg-[#A05C42]-10% text-[#A05C42] text-xs px-2 py-1 rounded-full">
                      {item % 2 === 0 ? "Trade" : "Free"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-[#A05C42]" />
                    <span className="text-sm text-[#5C4033]-70%">2.{item} miles away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="User avatar"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-[#5C4033]">
                      {item === 1 && "Sarah J."}
                      {item === 2 && "Michael T."}
                      {item === 3 && "Elena R."}
                      {item === 4 && "David K."}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]-10% rounded-full">
              View All Items
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Our Growing Community</h2>
            <p className="text-lg text-[#5C4033]-80%">
              Join thousands of gardeners already sharing and connecting. Here's what they're saying.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#5C4033]">Maria Garcia</h4>
                  <p className="text-sm text-[#5C4033]-70%">Urban Gardener</p>
                </div>
              </div>
              <p className="text-[#5C4033]-80% italic">
                "SeedSwap has transformed my small balcony garden! I've connected with neighbors who share rare herb
                varieties I couldn't find elsewhere."
              </p>
              <div className="flex mt-4 text-[#A05C42]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#5C4033]">James Wilson</h4>
                  <p className="text-sm text-[#5C4033]-70%">Community Garden Leader</p>
                </div>
              </div>
              <p className="text-[#5C4033]-80% italic">
                "Our community garden has flourished since joining SeedSwap. We've reduced waste by 70% and increased
                the variety of crops we grow by sharing with other gardens."
              </p>
              <div className="flex mt-4 text-[#A05C42]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="User avatar"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[#5C4033]">Aisha Patel</h4>
                  <p className="text-sm text-[#5C4033]-70%">Beginner Gardener</p>
                </div>
              </div>
              <p className="text-[#5C4033]-80% italic">
                "As a beginner, I was intimidated to start gardening. The SeedSwap community welcomed me with open arms,
                sharing not just seeds but knowledge and encouragement."
              </p>
              <div className="flex mt-4 text-[#A05C42]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#A05C42]-10% opacity-50"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl border border-[#E8DFD8]"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Ready to grow with us?</h2>
            <p className="text-xl text-[#5C4033]-80% mb-8 max-w-2xl mx-auto">
              Join our community of passionate gardeners and start sharing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 px-8 text-base rounded-full">
                Sign Up Now
              </Button>
              <Button
                variant="outline"
                className="border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]-10% h-12 px-8 text-base rounded-full"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&text=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5C4033]-80%">
                Join <span className="font-medium text-[#5C4033]">5,000+</span> gardeners in your area
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-[#E8DFD8]-30%">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5C4033] mb-4">Stay Connected</h2>
              <p className="text-[#5C4033]-80% mb-6">
                Subscribe to our newsletter for gardening tips, community events, and seasonal updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="h-12 border-[#E8DFD8] focus-visible:ring-[#A05C42] rounded-full"
                />
                <Button className="h-12 bg-[#A05C42] hover:bg-[#8B4513] text-white rounded-full whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C4033] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Flower2 className="h-8 w-8 text-white" />
                <span className="font-serif font-bold text-xl text-white">SeedSwap</span>
              </Link>
              <p className="text-white-80% mb-4">
                Connecting gardeners to share seeds, plants, and produce in their local communities.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white-80% hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white-80% hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white-80% hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white-80% hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white-80%">
                  <MapPin className="h-4 w-4" />
                  <span>123 Garden Street, Anytown</span>
                </li>
                <li className="flex items-center gap-2 text-white-80%">
                  <MessageCircle className="h-4 w-4" />
                  <span>hello@seedswap.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white-20% mt-8 pt-8 text-center text-white-60% text-sm">
            &copy; {new Date().getFullYear()} SeedSwap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

