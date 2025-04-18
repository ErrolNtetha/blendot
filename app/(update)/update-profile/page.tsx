"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, User, Sprout, MapPin, FileText } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function UpdateProfilePage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/gardens")
    }, 1500)
  }

  const handleSkip = () => {
    router.push("/gardens")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="min-h-screen bg-background py-8 md:py-12">
      <div className="container max-w-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Link href="/welcome" className="text-[#5C4033] hover:text-[#A05C42] transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-serif font-bold text-[#5C4033]">Complete Your Profile</h1>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-md p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Gardener Identity 
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A05C42]/10 p-2 rounded-full">
                  <User className="h-5 w-5 text-[#A05C42]" />
                </div>
                <h2 className="text-lg font-medium text-[#5C4033]">Gardener Identity</h2>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input id="displayName" placeholder="How you'll appear to other gardeners" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" required />
                </div>

                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox id="newsletter" />
                  <label
                    htmlFor="newsletter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                  >
                    Receive gardening tips and community updates
                  </label>
                </div>
              </div>
            </motion.div>*/}

            {/* Section 2: Gardening Details */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A05C42]/10 p-2 rounded-full">
                  <Sprout className="h-5 w-5 text-[#A05C42]" />
                </div>
                <h2 className="text-lg font-medium text-[#5C4033]">Gardening Details</h2>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="gardenType">Garden Type</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select garden type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="balcony">Balcony Garden</SelectItem>
                      <SelectItem value="backyard">Backyard Garden</SelectItem>
                      <SelectItem value="community">Community Garden Plot</SelectItem>
                      <SelectItem value="indoor">Indoor Garden</SelectItem>
                      <SelectItem value="farm">Small Farm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Gardening Experience</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>What are you interested in?</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="vegetables" />
                      <label
                        htmlFor="vegetables"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                      >
                        Vegetables
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="herbs" />
                      <label
                        htmlFor="herbs"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                      >
                        Herbs
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="flowers" />
                      <label
                        htmlFor="flowers"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                      >
                        Flowers
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fruits" />
                      <label
                        htmlFor="fruits"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                      >
                        Fruits
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="native" />
                      <label
                        htmlFor="native"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                      >
                        Native Plants
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="indoor" />
                      <label
                        htmlFor="indoor"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                      >
                        Indoor Plants
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Location */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A05C42]/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-[#A05C42]" />
                </div>
                <h2 className="text-lg font-medium text-[#5C4033]">Location</h2>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Your city" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Neighborhood (Optional)</Label>
                  <Input id="neighborhood" placeholder="Your neighborhood" />
                </div>

                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox id="shareLocation" />
                  <label
                    htmlFor="shareLocation"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#5C4033]/80"
                  >
                    Share my approximate location with the community
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Bio */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#A05C42]/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-[#A05C42]" />
                </div>
                <h2 className="text-lg font-medium text-[#5C4033]">Bio</h2>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="bio">About Your Garden</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about what you're growing and what you're interested in sharing or trading..."
                    className="min-h-[120px]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="pt-4 space-y-3">
              <Button
                type="submit"
                className="w-full bg-[#A05C42] hover:bg-[#8B4513] text-white h-12 rounded-full text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </span>
                ) : (
                  "Save & Explore Gardens"
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={handleSkip}
                className="w-full border-[#A05C42] text-[#A05C42] hover:bg-[#A05C42]/5 h-12 rounded-full text-base font-medium"
              >
                Skip for Now
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
