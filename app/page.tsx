import React from 'react'
import HomeInput from '@/components/HomeInput';

export default function Home() {
  return (
    <main className="bg-zinc-900 flex gap-10 w-full min-h-screen flex-col items-center justify-center">
      
      <div className='flex flex-col gap-3'>
        <h1 className='font-semibold text-5xl text-zinc-300 text-center'>Website Summarizer</h1>
        <p className='font-normal text-normal text-zinc-400 text-center'>Paste the link, receive a summary and ask any more questions you may have!</p>
      </div>

      <HomeInput />
      
    </main>
  );
}
