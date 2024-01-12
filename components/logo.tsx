"use client"

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { FC } from 'react'



interface LogoProps {
  isReverse?: boolean
}

export const Logo: FC<LogoProps> = ({ isReverse }) => {
  const { theme } = useTheme()

  return theme === 'light' ? (
    <Image
      src="/assets/logo-light.svg"
      alt="Logo"
      width={120}
      height={40}
    />
  ) : (
    <Image
      src="/assets/logo-dark.svg"
      alt="Logo"
      width={120}
      height={40}
    />
  )
}