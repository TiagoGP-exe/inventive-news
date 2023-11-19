"use client"

import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';

export const HeaderLayout = () => (
  <header
    className='flex items-center justify-center bg-background/80 py-4 px-4 sticky top-0 w-full border-b backdrop-blur z-20'
  >
    <main className='flex items-center justify-between max-w-screen-lg w-full'>
      <Logo />

      <div className="flex gap-2">
        <Button variant='outline'>
          Get started
        </Button>
        <ModeToggle />
      </div>
    </main>
  </header>
)
