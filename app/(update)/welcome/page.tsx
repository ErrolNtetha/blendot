// @ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Award, MapPin, Users, Sprout } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const badgeVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const handleContinue = () => {
    router.push("/update-profile")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top decorative pattern */}
        <div className="h-16 bg-gradient-to-r from-[#A05C42] to-[#8B4513] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
              <Leaf className="text-white h-20 w-20" />
            </div>
            <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2">
              <Sprout className="text-white h-16 w-16" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Badge */}
          <div className="flex justify-center -mt-16 mb-6">
            <motion.div className="bg-white rounded-full p-3 shadow-lg" variants={badgeVariants} animate="pulse">
              <div className="bg-[#A05C42]/10 rounded-full p-4">
                <Award className="h-10 w-10 text-[#A05C42]" />
              </div>
            </motion.div>
          </div>

          {/* Welcome text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-8">
            <motion.h1 variants={itemVariants} className="text-3xl font-serif font-bold text-[#5C4033] mb-3">
              Welcome to Blendot
            </motion.h1>
            <motion.p variants={itemVariants} className="text-[#5C4033]/80">
              Complete your profile to unlock the full gardening experience
            </motion.p>
          </motion.div>

          {/* Benefits list */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 mb-8">
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <div className="bg-[#A05C42]/10 rounded-full p-2 mt-0.5">
                <MapPin className="h-5 w-5 text-[#A05C42]" />
              </div>
              <div>
                <h3 className="font-medium text-[#5C4033]">Find gardens near you</h3>
                <p className="text-sm text-[#5C4033]/70">
                  Discover local gardens and exchange opportunities in your area
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <div className="bg-[#A05C42]/10 rounded-full p-2 mt-0.5">
                <Users className="h-5 w-5 text-[#A05C42]" />
              </div>
              <div>
                <h3 className="font-medium text-[#5C4033]">Connect with local growers</h3>
                <p className="text-sm text-[#5C4033]/70">
                  Build relationships with passionate gardeners in your community
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F8F5F2] transition-colors"
            >
              <div className="bg-[#A05C42]/10 rounded-full p-2 mt-0.5">
                <Sprout className="h-5 w-5 text-[#A05C42]" />
              </div>
              <div>
                <h3 className="font-medium text-[#5C4033]">Get personalized tips</h3>
                <p className="text-sm text-[#5C4033]/70">
                  Receive advice tailored to your garden and growing conditions
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Action button */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
            <Button
              onClick={handleContinue}
              className="w-full bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 rounded-full text-base font-medium"
            >
              Let&apos;s go!
            </Button>
          </motion.div>

          {/* Skip link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-center mt-4"
          >
            <Link href="/dashboard" className="text-sm text-[#5C4033]/70 hover:text-[#A05C42] transition-colors">
              I&apos;ll do this later
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Leaf className="h-40 w-40 text-[#A05C42]" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Sprout className="h-40 w-40 text-[#A05C42]" />
        </motion.div>
      </div>
    </div>
  )
}


