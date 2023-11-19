import { FC } from 'react'
import { Icons } from './icons'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

interface ButtonIconProps {
  name: keyof typeof Icons
  size?: number
  color?: string
  active?: boolean
  onClick?: () => void
  className?: string
  paddingSize?: "default" | "sm" | "lg"
  disabled?: boolean
  href: string
}

const buttonIconVariants = cva(" flex  justify-center items-center  md:hover:bg-accent active:translate-y-0.5 transition-all hover:text-foreground rounded", {
  variants: {
    variant: {
      active: "",
      default: "opacity-50  hover:opacity-100",
    },
    size: {
      default: "p-2",
      sm: "p-0.5",
      lg: "p-3",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
})

export const ButtonIcon: FC<ButtonIconProps> = ({
  name,
  size = 24,
  color,
  active = false,
  onClick,
  className,
  paddingSize = "default",
  disabled,
  href
}) => {

  const Icon = Icons[name]

  return (
    <Link
      href={href}
    >
      <button disabled={disabled} className={
        buttonIconVariants({
          variant: active ? "active" : "default",
          size: paddingSize,
          className
        })
      }
        onClick={onClick}
      >
        <Icon
          color={color}
          size={size}
        />
      </button>
    </Link>
  )
}