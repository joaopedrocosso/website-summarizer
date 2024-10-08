import Chat from '@/components/Chat'
import { ragChat } from '@/lib/rag-chat'
import { redis } from '@/lib/redis'
import { cookies } from 'next/headers'
import React from 'react'

interface PageProps{
    params: {
        url: string | string[] | undefined
    }
}

function fixUrl({ url }: { url: string[] }){
    const decode = url.map((component) => decodeURIComponent(component))
    return decode.join('/')
}

const Page = async ({ params }: PageProps) => {
    
    const sessionCookie = cookies().get("sessionId")?.value
    const fixedUrl = fixUrl({
        url: params.url as string[]
    })
    const sessionId = (fixedUrl + '--' + sessionCookie).replace(/\//g, "")
    
    const alreadyIndexed = await redis.sismember("indexed-urls", fixedUrl)

    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId })

    if(!alreadyIndexed){
        await ragChat.context.add({
            type: 'html',
            source: fixedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        })

        await redis.sadd("indexed-urls", fixedUrl)
    }


    return (
        <Chat sessionId={sessionId} initialMessages={initialMessages} />
  )
}

export default Page