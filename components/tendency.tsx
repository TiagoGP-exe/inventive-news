import { FC } from 'react'
import { CardTendency } from './card-tendency'

interface TendencyProps {
  data: {
    name: string
    username: string
    img: string
    title: string
    date: string
  }[]
}


export const Tendency: FC<TendencyProps> = ({
  data
}) => {
  return (
    <div className='flex justify-center w-full mx-auto border-t py-10 bg-foreground/5 flex-1'>
      <div className='flex flex-col max-w-screen-lg w-full px-4 gap-10'>
        <h1 className='text-3xl font-bold'>Treding</h1>

        <div
          className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4'
        >
          {
            data.map(({ date,
              img, name, title, username }, index) => (
              <CardTendency
                key={`${username}-${index}`}
                date={date}
                img={img}
                name={name}
                title={title}
                username={username}
                href={`/post/${index}`}
                index={index + 1}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}