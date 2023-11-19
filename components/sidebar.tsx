"use client"

import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
import { ButtonIcon } from './button-icon'
import { Logo } from './logo'


const routers = {
  home: '/dashboard',
  search: '/dashboard/search',
  bookmark: '/dashboard/bookmark',
  sketch: '/dashboard/sketch',
}

export const Sidebar = () => {
  const { push, prefetch } = useRouter()
  const [changeLocation, setChangeLocation] = useState("")

  const user = {
    name: "Luis",
    email: "luis@luis",
  }

  const logout = () => {
    console.log("logout")
  }

  const setPath = (path: string) => {
    setChangeLocation(path)
    push(path)
  }

  useEffect(() => {
    if (window !== undefined) {
      setChangeLocation(location.pathname)
    }
  }, [])

  return (
    <>
      <aside className='sticky inset-y-0 hidden min-h-screen flex-col items-end justify-between border-r px-4 py-7 md:flex' >

        <Logo />

        <div className='flex flex-col gap-y-8'>
          <ButtonIcon
            name='home'
            size={28}
            href={routers.home}
            onClick={() => setPath(routers.home)}
            active={changeLocation === routers.home || changeLocation === '/'}
          />

          <ButtonIcon
            name='search'
            size={28}
            href={routers.search}
            onClick={() => setPath(routers.search)}
            active={changeLocation === routers.search}
          />
          {user?.email && <ButtonIcon
            name='bookmark'
            size={28}
            href={routers.bookmark}
            onClick={() => setPath(routers.bookmark)}
            active={changeLocation === routers.bookmark}
          />}
          {user?.email && <ButtonIcon
            name='fileText'
            size={28}
            href={routers.sketch}
            onClick={() => setPath(routers.sketch)}
            active={changeLocation === routers.sketch}
          />}

        </div>

        <ButtonIcon
          name='logout'
          href="/"
          onClick={() => {
            push('/');
            logout()
          }}
          size={28}
        />
      </aside>
      <nav className='bg-background/90 xs:px-8 sticky bottom-0 z-10 flex w-full items-center  justify-center border-t py-4 pb-4 backdrop-blur-md md:hidden' >
        <div className='flex w-full items-center justify-around relative'>
          <ButtonIcon
            href={routers.home}
            name='home'
            size={24}
            paddingSize='sm'
            onClick={() => setPath(routers.home)}
            active={changeLocation === routers.home || changeLocation === '/'}
          />

          <ButtonIcon
            href={routers.search}
            name='search'
            size={24}
            paddingSize='sm'
            onClick={() => setPath(routers.search)}
            active={changeLocation === routers.search}
          />

          {user?.email && <ButtonIcon
            href={routers.bookmark}
            name='bookmark'
            size={24}
            paddingSize='sm'
            onClick={() => setPath(routers.bookmark)}
            active={changeLocation === routers.bookmark}
          />}

          {user?.email &&
            <ButtonIcon
              href={routers.sketch}
              name='fileText'
              size={24}
              paddingSize='sm'
              onClick={() => setPath(routers.sketch)}
              active={changeLocation === routers.sketch}
            />
          }

          <div className='absolute w-full -top-10 left-0 flex items-center justify-center'>
            <ButtonIcon
              href="/"
              active
              name='add'
              size={28}
              onClick={() => push("/editor/new")}
              className='bg-foreground text-background hover:bg-foreground/90 hover:text-background/90 rounded-full'
            />
          </div>
        </div>


      </nav>
      <div className="bg-gradient-to-t via-background/70 from-background h-24 w-full sticky bottom-12"></div>
    </>
  )
}