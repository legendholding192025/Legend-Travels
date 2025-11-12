"use client"

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/logo/travel.svg"
      alt="Legend Travels"
      className={className ?? "h-16 w-auto"}
    />
  )
}

