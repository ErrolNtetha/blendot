import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <section className="grid min-h-svh bg-white lg:grid-cols-2">
      <section className="flex flex-col gap-4 p-6 md:p-10">
        <section className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <section className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </section>
            Blendot.
          </Link>
        </section>
        <section className="flex flex-1 items-center justify-center">
          <section className="w-full max-w-xs">
            <LoginForm />
          </section>
        </section>
      </section>
      <section className="bg-muted relative hidden lg:block">
        <Image
          src="/pots.jpg"
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </section>
    </section>
  )
}
