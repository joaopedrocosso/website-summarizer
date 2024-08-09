// @ts-nocheck
"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Textarea } from "@nextui-org/react"
import { Send } from 'lucide-react'

const HomeInput = () => {
  const router = useRouter();
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`http://localhost:3000/${link}`);
  };

  return (
    <form onSubmit={handleSubmit} className='relative w-full max-w-2xl'>
      <Textarea
        value={link}
        onChange={(e) => setLink(e.target.value)}
        minRows={1}
        placeholder="Paste the website link here..."
        className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
      />

      <Button size='sm' type='submit' className='absolute z-10 border border-border bg-zinc-900 right-2 bottom-2 top-1' >
        <Send className='size-4' />
      </Button>
    </form>
  )
}

export default HomeInput