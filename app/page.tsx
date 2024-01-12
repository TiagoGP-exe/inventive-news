import { Tendency } from '@/components/tendency'
import { HeaderLayout } from '@/components/layout/header-layout'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const fakeTendency = [
  {
    name: "Pamela Currey",
    username: "pamelacurrey",
    img: "/assets/photo-1.png",
    title: "Lorem Ipsum",
    date: "2 days ago"
  },
  {
    name: "Pamela Currey",
    username: "pamelacurrey",
    img: "/assets/photo-1.png",
    title: "Lorem Ipsum",
    date: "2 days ago"
  },
  {
    name: "Pamela Currey",
    username: "pamelacurrey",
    img: "/assets/photo-1.png",
    title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2 days ago"
  },
  {
    name: "Pamela Currey",
    username: "pamelacurrey",
    img: "/assets/photo-1.png",
    title: "Lorem Ipsum",
    date: "2 days ago"
  },
  {
    name: "Pamela Currey",
    username: "pamelacurrey",
    img: "/assets/photo-1.png",
    title: "Lorem Ipsum",
    date: "2 days ago"
  },
  {
    name: "Pamela Currey",
    username: "pamelacurrey",
    img: "/assets/photo-1.png",
    title: "Lorem Ipsum",
    date: "2 days ago"
  },
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeaderLayout />
      <main className='flex flex-col max-w-screen-lg w-full px-4  '>
        <section className='flex flex-col sm:flex-row items-center sm:items-start justify-between mt-0 sm:mt-4 gap-10 pt-10'>
          <div className='flex flex-col sm:max-w-md items-start gap-2'>
            <h1 className='text-4xl sm:text-5xl font-bold'>Share your ideas
              in a simple way
            </h1>
            <p className='mt-2 opacity-70 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan suscipit ex, vitae ullamcorper tellus consectetur vitae. Sed dictum euismod mi, eget commodo sem lobortis eu.
            </p>
            <Link href='/dashboard'>
              <Button className='mt-4'>
                Start reading
              </Button>
            </Link>
          </div>


          <Image
            unoptimized
            src="/assets/illustration.svg"
            alt="Next.js Logo"
            width={500}
            height={500}
            className='w-full sm:w-1/2'
          />
        </section>
      </main>
      <Tendency data={fakeTendency} />
    </main>
  )
}
