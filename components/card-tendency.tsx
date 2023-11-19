import { cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CardTendency {
  img: string;
  name: string;
  username: string;
  title: string;
  date: string;
  href: string;
  index: number;
}

const numberVariants = cva(
  "text-2xl font-bold drop-shadow-accent",
  {
    variants: {
      variant: {
        1: "text-yellow-500",
        2: "text-slate-300",
        3: "text-yellow-700",
        default: "text-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const verifyNumber = (number: number): 1 | 2 | 3 | "default" | null | undefined => {
  if (number > 0 && number < 4) {
    return `${number}` as 1 | 2 | 3 | "default"
  }
  return "default"
}

export const CardTendency: FC<CardTendency> = ({
  title,
  img,
  date,
  name,
  username,
  href,
  index
}) => (
  <Link href={href}>
    <div className='flex gap-4 hover:bg-foreground/5 border p-4 rounded-md transition-all duration-150 cursor-pointer flex-1'>
      <h1 className={numberVariants({ variant: verifyNumber(index) })}>{index}º</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-3'>
          <Image
            src={img}
            alt="profile"
            width={48}
            height={48}
            className='rounded-md border'
          />
          <div>
            <h2 className='text-lg font-bold leading-6'>{name}</h2>
            <p className='text-xs opacity-40'>@{username}</p>
          </div>
        </div>
        <h2 className='text-xl font-bold line-clamp-1'>{title}</h2>
        <p className='text-sm opacity-70'>{date}</p>
      </div>
    </div>
  </Link>
)
