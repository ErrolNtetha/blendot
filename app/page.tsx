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
import { useRouter } from "next/navigation"
import { BUCKET_URL } from "@/constants/cf"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
  }, [])

    //useEffect(() => {
    //    // All user posts 
    //    const getAllPosts = async () => {
    //        const posts = await fetch('/api/v1/posts');
    //        const res = await posts.json();
    //        console.log('Posts: ', res);
    //    }
    //
    //    getAllPosts();
    //}, []);

    const handleSearch = () => {
        console.log('hello');
    }

    const users = [
        {
            img: `${BUCKET_URL}/user-01.jpg`,
            names: {
                firstNames: 'Nonhle',
                lastName: 'Mkhize'
            },
            seeds: 'Swiss Chard Seeds',
            offerType: 'Trade',
            seedsPicture: `${BUCKET_URL}/02.jpg`,
            km: 15,
        },
        {
            img: `${BUCKET_URL}/user-02.jpg`,
            names: {
                firstNames: 'Alwande',
                lastName: 'Gumede'
            },
            seeds: 'Cucumber Seeds',
            offerType: 'Free',
            seedsPicture: `${BUCKET_URL}/03.jpg`,
            km: 28,
        },
        {
            img: `${BUCKET_URL}/user-03.jpg`,
            names: {
                firstNames: 'John',
                lastName: 'Schwartz'
            },
            seeds: 'Tomato Variety Seeds',
            offerType: 'Trade',
            seedsPicture: `${BUCKET_URL}/04.jpg`,
            km: 4,
        },
        {
            img: `${BUCKET_URL}/user-04.jpg`,
            names: {
                firstNames: 'Sandile',
                lastName: 'Phungula'
            },
            seeds: 'Blueberries',
            offerType: 'Free',
            seedsPicture: `${BUCKET_URL}/01.jpg`,
            km: 12,
        },
    ]

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
    <section className="">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <section className="absolute inset-0 -z-10">
          <section className="absolute inset-0 bg-[#E8DFD8] opacity-50"></section>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
          />
        </section>
        <section className="container mx-auto px-4">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.section initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
              <section className="inline-block bg-[#A05C42]-10% text-[#A05C42] px-4 py-1 rounded-full text-sm font-medium">
                Community Gardening Reimagined
              </section>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5C4033] leading-tight">
                Share seeds, grow community
              </h1>
              <p className="text-lg text-[#5C4033]-80% md:pr-12">
                Connect with fellow gardeners in your neighborhood to exchange seeds, seedlings and harvest. Cultivate
                relationships while growing your garden.
              </p>
              <section className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-[#8B4513] text-white h-12 px-6 text-base rounded-full" onClick={() => router.push('/register')}>
                  Start Sharing
                </Button>
                <Button
                  variant="outline"
                  className="border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]-10% h-12 px-6 text-base rounded-full"
                  asChild
                >
                    <Link href='/about'>
                        Learn More
                    </Link>
                </Button>
              </section>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <section className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                <Image
                  src={`${BUCKET_URL}/pots.jpg`}
                  alt="People gardening together"
                  fill
                  className="object-cover"
                />
              </section>
              <section className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <section className="flex items-center gap-3">
                  <section className="bg-[#A05C42]-10% p-2 rounded-full">
                    <Users className="h-5 w-5 text-[#A05C42]" />
                  </section>
                  <section>
                    <p className="text-sm font-medium text-[#5C4033]">Join 2,000+ gardeners</p>
                    <p className="text-xs text-[#5C4033]-70%">in your local area</p>
                  </section>
                </section>
              </section>
              <section className="absolute -left-6 top-1/4 bg-white p-3 rounded-full shadow-lg">
                <Seedling className="h-6 w-6 text-[#A05C42]" />
              </section>
              <section className="absolute right-12 top-10 bg-white p-3 rounded-full shadow-lg">
                <Leaf className="h-6 w-6 text-[#A05C42]" />
              </section>
            </motion.section>
          </section>
        </section>
      </section>

      {/* Search Section */}
      <section className="py-12 md:py-20">
        <section className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-[#E8DFD8]"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#5C4033] mb-6">
              Find garden treasures near you
            </h2>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <section className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-[#A05C42]" />
                <Input
                  placeholder="Tomato seeds, herb plants..."
                  className="pl-10 h-12 border-[#E8DFD8] focus-visible:ring-[#A05C42] rounded-full"
                />
              </section>
              <section className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#A05C42]" />
                <Input
                  placeholder="Your location"
                  className="pl-10 h-12 border-[#E8DFD8] focus-visible:ring-[#A05C42] rounded-full"
                />
              </section>
              <Button className="h-12 bg-[#A05C42] hover:bg-[#8B4513] text-white rounded-full">Search</Button>
            </form>
            <section className="mt-6 flex flex-wrap items-center gap-2 justify-center">
              <span className="text-sm text-[#5C4033]-70%">Popular:</span>
              <button className="text-sm border bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Tomato Seeds
              </button>
              <button className="text-sm border bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Herb Plants
              </button>
              <button className="text-sm border bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Vegetable Seedlings
              </button>
              <button className="text-sm border bg-[#A05C42]-10% text-[#A05C42] px-3 py-1 rounded-full hover:bg-[#A05C42]-20% transition-colors">
                Flower Bulbs
              </button>
            </section>
          </motion.section>
        </section>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-[#E8DFD8]-30%">
        <section className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Why Join Blendot?</h2>
            <p className="text-lg text-[#5C4033]-80%">
              Our community helps you connect with fellow gardeners, share your bounty, and grow together in a
              sustainable way.
            </p>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.section variants={itemFadeIn} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]">
              <section className="bg-[#A05C42]-10% w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Seedling className="h-8 w-8 text-[#A05C42]" />
              </section>
              <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Share & Exchange</h3>
              <p className="text-[#5C4033]-80% text-center">
                Trade seeds, seedlings, and surplus harvest with neighbors. Reduce waste while expanding your garden
                variety.
              </p>
            </motion.section>

            <motion.section variants={itemFadeIn} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]">
              <section className="bg-[#A05C42]-10% w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-[#A05C42]" />
              </section>
              <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Build Community</h3>
              <p className="text-[#5C4033]-80% text-center">
                Connect with gardeners in your area, share knowledge, and cultivate meaningful relationships.
              </p>
            </motion.section>

            <motion.section variants={itemFadeIn} className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]">
              <section className="bg-[#A05C42]-10% w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sun className="h-8 w-8 text-[#A05C42]" />
              </section>
              <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Grow Sustainably</h3>
              <p className="text-[#5C4033]-80% text-center">
                Promote eco-friendly gardening practices through sharing resources and reducing waste.
              </p>
            </motion.section>
          </motion.section>
        </section>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
        <section className="absolute inset-0 -z-10">
          <section className="absolute inset-0 bg-[#F8F5F2] opacity-50"></section>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
          />
        </section>
        <section className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">How Blendot Works</h2>
            <p className="text-lg text-[#5C4033]-80%">
              Join our community in three simple steps and start sharing today.
            </p>
          </motion.section>

          <section className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connection line */}
            <section className="hidden md:block absolute top-24 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-[#A05C42]-30% z-0"></section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10"
            >
              <section className="bg-white rounded-2xl p-6 border border-[#E8DFD8] shadow-md">
                <section className="bg-[#A05C42] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  1
                </section>
                <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Create Your Profile</h3>
                <p className="text-[#5C4033]-80% text-center">
                  Sign up and tell us about your garden, what you&apos;re growing, and what you&apos;re looking for.
                </p>
              </section>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <section className="bg-white rounded-2xl p-6 border border-[#E8DFD8] shadow-md">
                <section className="bg-[#A05C42] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  2
                </section>
                <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">List Your Offerings</h3>
                <p className="text-[#5C4033]-80% text-center">
                  Add the seeds, plants, or produce you want to share or trade with the community.
                </p>
              </section>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10"
            >
              <section className="bg-white rounded-2xl p-6 border border-[#E8DFD8] shadow-md">
                <section className="bg-[#A05C42] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  3
                </section>
                <h3 className="text-xl font-serif font-bold text-[#5C4033] mb-3 text-center">Connect & Exchange</h3>
                <p className="text-[#5C4033]-80% text-center">
                  Message other gardeners, arrange meetups, and exchange your garden treasures.
                </p>
              </section>
            </motion.section>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 px-8 text-base rounded-full">
              Join Our Community
            </Button>
          </motion.section>
        </section>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 md:py-24 bg-[#E8DFD8]-30%">
        <section className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Recently Shared Items</h2>
            <p className="text-lg text-[#5C4033]-80%">Browse what gardeners in your community are currently sharing.</p>
          </motion.section>

          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {users.map((user, index) => (
              <motion.section
                key={index}
                variants={itemFadeIn}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#E8DFD8] group"
              >
                <section className="relative h-48 w-full">
                  <Image
                    src={user.seedsPicture}
                    alt={`Garden item`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </section>
                <section className="p-4">
                  <section className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-[#5C4033]">
                        {user.seeds}
                    </h3>
                    <span className="bg-[#A05C42]-10% border text-[#A05C42] text-xs px-2 py-1 rounded-full">
                        {user.offerType}
                    </span>
                  </section>
                  <section className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-[#A05C42]" />
                    <span className="text-sm text-[#5C4033]-70%">{user.km} km away</span>
                  </section>
                  <section className="flex items-center gap-2">
                    <section className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={user.img}
                        alt="User avatar"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </section>
                    <span className="text-sm text-[#5C4033]">
                        {user.names.firstNames} {user.names.lastName}
                    </span>
                  </section>
                </section>
              </motion.section>
            ))}
          </motion.section>

          <section className="text-center mt-10">
            <Button variant="outline" className="border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]-10% rounded-full">
              View All Items
            </Button>
          </section>
        </section>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 md:py-24">
        <section className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] mb-4">Our Growing Community</h2>
            <p className="text-lg text-[#5C4033]-80%">
              Join thousands of gardeners already sharing and connecting. Here&apos;s what they&aposre saying.
            </p>
          </motion.section>

          <section className="grid md:grid-cols-3 gap-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]"
            >
              <section className="flex items-center gap-4 mb-4">
                <section className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={`${BUCKET_URL}/user-05.jpg`}
                    alt="User avatar"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </section>
                <section>
                  <h4 className="font-medium text-[#5C4033]">Nongcebo Mthimkhulu</h4>
                  <p className="text-sm text-[#5C4033]-70%">Urban Gardener</p>
                </section>
              </section>
              <p className="text-[#5C4033]-80% italic">
                &apos;Blendot has transformed my small balcony garden! I&apos;ve connected with neighbors who share rare herb
                varieties I couldn&apos;t find elsewhere.&apos;
              </p>
              <section className="flex mt-4 text-[#A05C42]">
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
              </section>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]"
            >
              <section className="flex items-center gap-4 mb-4">
                <section className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={`${BUCKET_URL}/user-06.jpg`}
                    alt="User avatar"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </section>
                <section>
                  <h4 className="font-medium text-[#5C4033]">Emmy Wilson</h4>
                  <p className="text-sm text-[#5C4033]-70%">Community Garden Leader</p>
                </section>
              </section>
              <p className="text-[#5C4033]-80% italic">
                &apos;Our community garden has flourished since joining Blendot. We&apos;ve reduced waste by 70% and increased
                the variety of crops we grow by sharing with other gardens.&apos;
              </p>
              <section className="flex mt-4 text-[#A05C42]">
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
              </section>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DFD8]"
            >
              <section className="flex items-center gap-4 mb-4">
                <section className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={`${BUCKET_URL}/user-08.jpg`}
                    alt="User avatar"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </section>
                <section>
                  <h4 className="font-medium text-[#5C4033]">Aisha Patel</h4>
                  <p className="text-sm text-[#5C4033]-70%">Beginner Gardener</p>
                </section>
              </section>
              <p className="text-[#5C4033]-80% italic">
                &apos;As a beginner, I was intimidated to start gardening. The Blendot community welcomed me with open arms,
                sharing not just seeds but knowledge and encouragement.&apos;
              </p>
              <section className="flex mt-4 text-[#A05C42]">
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
              </section>
            </motion.section>
          </section>
        </section>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <section className="absolute inset-0 -z-10">
          <section className="absolute inset-0 bg-[#A05C42]-10% opacity-50"></section>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover opacity-10"
          />
        </section>
        <section className="container mx-auto px-4">
          <motion.section
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
            <section className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 px-8 text-base rounded-full">
                Sign Up Now
              </Button>
              <Button
                variant="outline"
                className="border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]-10% h-12 px-8 text-base rounded-full"
              >
                Learn More
              </Button>
            </section>
            <section className="mt-8 flex items-center justify-center gap-4">
              <section className="flex -space-x-2">
                {users.map((i, index) => (
                  <section key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={i.img}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </section>
                ))}
              </section>
              <p className="text-sm text-[#5C4033]-80%">
                Join <span className="font-medium text-[#5C4033]">2,000+</span> gardeners in your area
              </p>
            </section>
          </motion.section>
        </section>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-[#E8DFD8]-30%">
        <section className="container mx-auto px-4">
          <section className="max-w-3xl mx-auto text-center">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5C4033] mb-4">Stay Connected</h2>
              <p className="text-[#5C4033]-80% mb-6">
                Subscribe to our newsletter for gardening tips, community events, and seasonal updates.
              </p>
              <section className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="h-12 border-[#E8DFD8] focus-visible:ring-[#A05C42] rounded-full"
                />
                <Button className="h-12 bg-[#A05C42] hover:bg-[#8B4513] text-white rounded-full whitespace-nowrap">
                  Subscribe
                </Button>
              </section>
            </motion.section>
          </section>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C4033] text-white py-12 md:py-16">
        <section className="container mx-auto px-4">
          <section className="grid md:grid-cols-4 gap-8">
            <section className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Flower2 className="h-8 w-8 text-white" />
                <span className="font-serif font-bold text-xl text-white">Blendot</span>
              </Link>
              <p className="text-white-80% mb-4">
                Connecting gardeners to share seeds, plants, and produce in their local communities.
              </p>
              <section className="flex gap-4">
                <a href="#" className="text-white-80% hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white-80% hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white-80% hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </section>
            </section>
            <section>
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
            </section>
            <section>
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
            </section>
            <section>
              <h4 className="font-medium text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white-80%">
                  <MapPin className="h-4 w-4" />
                  <span> 123 Nhlanzi Street, Durban, South Africa </span>
                </li>
                <li className="flex items-center gap-2 text-white-80%">
                  <MessageCircle className="h-4 w-4" />
                  <span>info@blendot.co.za</span>
                </li>
              </ul>
            </section>
          </section>
          <section className="border-t border-white-20% mt-8 pt-8 text-center text-white-60% text-sm">
            &copy; {new Date().getFullYear()} Blendot. All rights reserved.
          </section>
        </section>
      </footer>
    </section>
  );
}

