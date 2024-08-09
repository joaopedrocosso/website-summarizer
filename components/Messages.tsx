import React from 'react'
import { type Message as TMassage } from 'ai/react'
import Message from './Message'
import { MessageSquare } from 'lucide-react'

interface MessagesProps{
    messages: TMassage[]
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className='flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto'>
        {messages.length ? messages.map((message, i) => (
            <Message key={i} content={message.content} isUserMessage={message.role === 'user'} />
        )) : (
            <div className='flex-1 flex flex-col items-center justify-end gap-2'>
              <MessageSquare className='size-8 text-blue-500'/>
              <h3 className='font-semibold text-xl text-white'>Still have questions?</h3>
              <p className='text-zinc-500'>Keep asking about it!</p>
            </div>
        )}
    </div>
  )
}

export default Messages