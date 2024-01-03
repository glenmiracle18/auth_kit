import React from 'react'
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets: ["latin"],
  weight: ["500"]
})

const Home = () => {
  return (
    <main className="flex flex-col justify-center h-full items-center bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-green-400 to-green-800">
      <div className='space-y-6 text-center'>
        <h1 className={cn(
          'text-6xl text-white font-semibold drop-shadow-md', font.className,
          )}>
          🔑Auth
        </h1>
        <p className='text-white'>
          A simple authentication service for all <br /> your software projects.
        </p>
      </div>
      <LoginButton>
        <Button variant='secondary' className='mt-4' size="lg">
          Sign In
        </Button>
      </LoginButton>
      
    </main>
  )
}

export default Home;