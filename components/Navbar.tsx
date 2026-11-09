"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#222222] text-white">
      <div className="flex h-18 items-center justify-between px-6">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="HireLoop"
            width={154}
            height={44}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/jobs">Browse Jobs</Link>
          <Link href="/company">Company</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/sign-in" className="text-[#7169FE]">
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg bg-[#5E56FE] px-6 py-3 text-white"
          >
            Get Started
          </Link>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 bg-[#222222] px-6 pb-4 lg:hidden">
          <Link href="/jobs" onClick={() => setOpen(false)}>
            Browse Jobs
          </Link>
          <Link href="/company" onClick={() => setOpen(false)}>
            Company
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link
            href="/sign-in"
            onClick={() => setOpen(false)}
            className="text-[#7169FE]"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-[#5E56FE] px-6 py-3 text-center"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  )
}
