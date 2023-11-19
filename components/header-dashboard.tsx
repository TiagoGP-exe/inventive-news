import Image from 'next/image'
import { ButtonIcon } from './button-icon'
import { ModeToggle } from './mode-toggle'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// import { useAuth } from './use-auth'
// import { Avatar } from './avatar-and-status'

const GENDER_MESSAGE = {
  M: "Bem vindo de volta",
  F: "Bem vinda de volta"
}

export const HeaderDashboard = () => {
  // const { user } = useAuth()
  const user = {
    fullName: "Pamella Currey",
    email: "pamellacurrey@email",
    photo: "/assets/photo-1.png",
    gender: "M",
    urlImgProfile: "",
  }

  return (
    <header className='bg-background/90 xs:px-8 sticky -top-2 z-10 mb-8 flex items-center justify-between border-b px-4 py-5 backdrop-blur-md'>
      <ButtonIcon
        href="/editor/new"
        className='hidden md:block'
        name='add'
        disabled={!user?.email}
      />

      <div className='flex flex-1 flex-row-reverse items-center justify-between gap-2 md:flex-none md:flex-row md:justify-center'>
        <ModeToggle />
        {user?.email &&
          <div className='flex items-center gap-2 '>
            {/* <Avatar name={user?.fullName ?? ""} imgURL={`data:image/png;base64, ${user?.photo}` ?? user?.urlImgProfile ?? ""} /> */}
            <Image
              src={user.photo}
              alt="Next.js Logo"
              width={40}
              height={40}
              className='rounded-md border'
            />
            <div className='flex flex-col'>
              <span className='text-[0.6rem] opacity-70'>
                {GENDER_MESSAGE["F"]}
              </span>
              <p className='text-lg  font-bold leading-5'>{user?.fullName}</p>
            </div>
          </div>}
      </div>
    </header>
  )
}
